import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderScript, j as renderComponent } from '../chunks/astro/server_Bk8wKb1T.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_XLUJ17Fx.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero"> <div class="swiper"> <div class="swiper-wrapper"> <div class="swiper-slide"> <img src="/hero_images/Hero01.png" alt="Davmar House - Exterior View"> </div> <div class="swiper-slide"> <img src="/hero_images/Hero02.jpg" alt="Cozy Bedroom at Davmar House"> </div> <div class="swiper-slide"> <img src="/hero_images/Hero03.png" alt="Local Area"> </div> </div> <!-- Pagination --> <div class="swiper-pagination"></div> <!-- Navigation --> <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> </div> </section> <!-- Run Swiper on Client Side --> ${renderScript($$result, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/Hero.astro", undefined);

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="welcome-section py-5"> <div class="container"> <div class="row justify-content-center"> <div class="col-lg-8 text-center"> <h2 class="welcome-title">Welcome to Davmar House</h2> <p class="welcome-text">
Davmar House offers Room Only accommodation and is located just 900 metres from Blarney village, with its famous castle, gardens, and woollen mills. 
            Set in a tranquil area, it offers modern, spacious accommodation with power showers and free fibre Broadband Wi-Fi.
</p> <p class="welcome-text">
For commercial rates and 2+ night stays please <strong>contact us directly</strong>.
</p> <p class="welcome-text">
The bright, well-heated rooms are comfortably furnished. Each room has a flat-screen TV, work space/table, tea/coffee facilities, hairdryer, and En-suite shower room.
</p> <p class="welcome-text">
Free off-street parking is available, and local amenities include Pubs, Restaurants, shopping at the famous Blarney Woollen Mills and local golf courses, such as Muskerry Golf Club as well as Blarney Golf Resort.
</p> <p class="welcome-text">
The location is well-suited for visiting Cork City, Kinsale, Cobh, and Middleton.
</p> </div> </div> </div> </section>`;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/Welcome.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/index.astro", undefined);

const $$file = "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
