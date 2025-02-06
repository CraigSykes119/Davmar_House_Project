import nodemailer from "nodemailer";

// Load environment variables (Create a `.env` file to store sensitive data)
import dotenv from "dotenv";
dotenv.config();

export async function post({ request }) {
  try {
    const formData = await request.formData();

    // Extract user input from the form
    const name = formData.get("name");
    const email = formData.get("email");
    const country = formData.get("country");
    const telephone = formData.get("telephone");
    const message = formData.get("message");

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use your SMTP provider
      auth: {
        user: process.env.EMAIL_USER, // Store this in .env
        pass: process.env.EMAIL_PASS, // Store this in .env
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "your-email@example.com", // Replace with your actual email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Country: ${country}
        Telephone: ${telephone}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, message: "Email sending failed." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
