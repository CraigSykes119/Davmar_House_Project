export const prerender = false; // Allows server-side API execution

export async function POST({ request }) {
  try {
    const data = await request.json(); // Parse JSON body
    console.log("Form Submission:", data); // Log data to console

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling form:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500 }
    );
  }
}
