export async function POST({ request }: { request: Request }) {
  console.log("🔹 Contact API Route Called"); // Debugging log

  const apiKey = import.meta.env.PUBLIC_BREVO_API_KEY;
  const senderEmail = import.meta.env.SENDER_EMAIL;
  const senderName = import.meta.env.SENDER_NAME;
  const recipientEmail = import.meta.env.RECIPIENT_EMAIL;

  // Debugging logs to check if env variables are loading correctly
  console.log("🔹 API Key Loaded:", !!apiKey);
  console.log("🔹 Sender Email:", senderEmail);
  console.log("🔹 Recipient Email:", recipientEmail);

  if (!apiKey || !senderEmail || !senderName || !recipientEmail) {
    console.error("❌ Missing API Key or Email Settings.");
    return new Response(
      JSON.stringify({ success: false, message: "❌ Missing API Key or Email settings." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const formData = await request.json();
    console.log("🔹 Received Form Data:", formData);

    const { name, email, country, telephone, message } = formData;

    // Construct email content
    const emailContent = {
      sender: { name: senderName, email: senderEmail }, // Sender must be verified in Brevo
      to: [{ email: recipientEmail, name: "Davmar House Admin" }],
      subject: "New Contact Form Submission - Davmar House",
      htmlContent: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Telephone:</strong> ${telephone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    console.log("🔹 Sending Email Request to Brevo...");

    // Send email using Brevo API
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(emailContent),
    });

    const result = await response.json();
    console.log("🔹 Brevo API Response:", result);

    if (!response.ok) {
      console.error("❌ Failed to send email:", result);
      return new Response(
        JSON.stringify({ success: false, message: "❌ Failed to send email.", error: result }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "✅ Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("❌ Internal Server Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "❌ Internal Server Error.", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
