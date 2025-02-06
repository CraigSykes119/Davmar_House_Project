export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
      const formData = await request.json(); // Read submitted form data

      console.log("Received Form Data:", formData);

      return new Response(
          JSON.stringify({ success: true, message: "✅ Form submitted successfully!" }),
          { status: 200, headers: { "Content-Type": "application/json" } }
      );
  } catch (error) {
      console.error("❌ Form submission error:", error);

      return new Response(
          JSON.stringify({ success: false, message: "❌ Failed to submit the form." }),
          { status: 500, headers: { "Content-Type": "application/json" } }
      );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
