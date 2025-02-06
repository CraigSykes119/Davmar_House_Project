import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderScript, j as renderComponent, g as addAttribute } from '../chunks/astro/server_Bk8wKb1T.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_XLUJ17Fx.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="contact-form" class="contact-form" data-astro-cid-svshx33u> <div class="form-group" data-astro-cid-svshx33u> <label for="name" data-astro-cid-svshx33u>Name*</label> <input type="text" id="name" name="name" required data-astro-cid-svshx33u> </div> <div class="form-group" data-astro-cid-svshx33u> <label for="email" data-astro-cid-svshx33u>Email*</label> <input type="email" id="email" name="email" required data-astro-cid-svshx33u> </div> <div class="form-group" data-astro-cid-svshx33u> <label for="country" data-astro-cid-svshx33u>Country*</label> <input type="text" id="country" name="country" required data-astro-cid-svshx33u> </div> <div class="form-group" data-astro-cid-svshx33u> <label for="telephone" data-astro-cid-svshx33u>Telephone*</label> <input type="tel" id="telephone" name="telephone" required data-astro-cid-svshx33u> </div> <div class="form-group" data-astro-cid-svshx33u> <label for="message" data-astro-cid-svshx33u>How can we help you?*</label> <textarea id="message" name="message" rows="5" required data-astro-cid-svshx33u></textarea> </div> <button type="submit" class="submit-btn" data-astro-cid-svshx33u>Send Message</button> <p id="response-message" style="display: none;" data-astro-cid-svshx33u></p> </form>  <!-- JavaScript for Form Handling --> ${renderScript($$result, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/ContactForm.astro", undefined);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contact"> <h1>Contact Us</h1> <p>Have questions? Reach out to us using the form below.</p> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} <div class="contact-details"> <h2>Contact Information</h2> <p><strong>📍 Address:</strong> Davmar House, Blarney, County Cork, Ireland</p> <p><strong>📞 Phone:</strong> <a href="tel:+353214385882">+353 21 438 5882</a></p> <p><strong>📧 Email:</strong> <a href="mailto:info@davmarhouse.ie">info@davmarhouse.ie</a></p> <h2>Check-in & Check-out</h2> <p><strong>✅ Check-in:</strong> From 2:00 PM</p> <p><strong>⏳ Check-out:</strong> Until 11:00 AM</p> </div> <!-- Google Maps Embed --> <div class="map-container"> <iframe width="100%" height="350" frameborder="0" style="border:0; border-radius: 8px;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"${addAttribute(`https://www.google.com/maps/embed/v1/place?key=${"AIzaSyCAA1sEEB2qZLAWLt_V2sSK9DBMOhRNJr8"}&q=51.940363,-8.568047`, "src")}>
        </iframe> </div> </section> ` })}`;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/contact.astro", undefined);
const $$file = "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
