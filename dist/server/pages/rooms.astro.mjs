import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, j as renderComponent } from '../chunks/astro/server_Bk8wKb1T.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_XLUJ17Fx.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$RoomCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RoomCard;
  const { title, price, imgSrc, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card room-card d-flex flex-column h-100" data-astro-cid-v73b7rkq> <img${addAttribute(imgSrc, "src")}${addAttribute(title, "alt")} class="card-img-top" data-astro-cid-v73b7rkq> <div class="card-body d-flex flex-column flex-grow-1" data-astro-cid-v73b7rkq> <h5 class="card-title" data-astro-cid-v73b7rkq>${title}</h5> <p class="card-text flex-grow-1" data-astro-cid-v73b7rkq>${description}</p> <p class="room-price" data-astro-cid-v73b7rkq>${price}</p> </div> </div> `;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/RoomCard.astro", undefined);

const $$RoomsList = createComponent(($$result, $$props, $$slots) => {
  const rooms = [
    {
      title: "Standard Room",
      price: "\u20AC90 per night",
      imgSrc: "/room_images/STDroom.jpg",
      description: "A cozy standard room with modern amenities."
    },
    {
      title: "Deluxe Room",
      price: "\u20AC120 per night",
      imgSrc: "/room_images/DELroom.jpg",
      description: "A spacious deluxe room with a scenic view."
    },
    {
      title: "Suite",
      price: "\u20AC150 per night",
      imgSrc: "/room_images/SUITEroom.jpg",
      description: "Our most luxurious suite with premium features."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="rooms-list container" data-astro-cid-3i3fq6ls> <div class="row justify-content-center" data-astro-cid-3i3fq6ls> ${rooms.map((room) => renderTemplate`<div class="col-md-4 d-flex" data-astro-cid-3i3fq6ls> ${renderComponent($$result, "RoomCard", $$RoomCard, { ...room, "data-astro-cid-3i3fq6ls": true })} </div>`)} </div> </section> `;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/RoomsList.astro", undefined);

const $$Rooms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-h5cpthjk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="rooms-hero" data-astro-cid-h5cpthjk> <h1 data-astro-cid-h5cpthjk>Rooms & Rates</h1> <p data-astro-cid-h5cpthjk>Comfortable and modern accommodation in the heart of Blarney.</p> </section>  <section class="facilities" data-astro-cid-h5cpthjk> <h2 data-astro-cid-h5cpthjk>Our Facilities & Activities Available</h2> <div class="row" data-astro-cid-h5cpthjk> <!-- Main Facilities Box --> <div class="col-md-6" data-astro-cid-h5cpthjk> <div class="facility-box" data-astro-cid-h5cpthjk> <h3 data-astro-cid-h5cpthjk>Main Facilities</h3> <ul data-astro-cid-h5cpthjk> <li data-astro-cid-h5cpthjk>Baggage store</li> <li data-astro-cid-h5cpthjk>Picnic area</li> <li data-astro-cid-h5cpthjk>Free high-speed fibre broadband internet</li> <li data-astro-cid-h5cpthjk>Free WiFi internet</li> <li data-astro-cid-h5cpthjk>Common room with fridge, microwave, plates & cutlery</li> <li data-astro-cid-h5cpthjk>Free on-site parking</li> </ul> </div> </div> <!-- Activities Box --> <div class="col-md-6" data-astro-cid-h5cpthjk> <div class="facility-box" data-astro-cid-h5cpthjk> <h3 data-astro-cid-h5cpthjk>Nearby Activities & Experiences</h3> <ul data-astro-cid-h5cpthjk> <li data-astro-cid-h5cpthjk>Scenic walks</li> <li data-astro-cid-h5cpthjk>Bowling alley</li> <li data-astro-cid-h5cpthjk>Cycling</li> <li data-astro-cid-h5cpthjk>Fishing</li> <li data-astro-cid-h5cpthjk>Golf</li> <li data-astro-cid-h5cpthjk>Horse riding</li> <li data-astro-cid-h5cpthjk>Mountain biking</li> <li data-astro-cid-h5cpthjk>Shopping</li> <li data-astro-cid-h5cpthjk>Theatre</li> </ul> </div> </div> </div> </section> ${renderComponent($$result2, "RoomsList", $$RoomsList, { "data-astro-cid-h5cpthjk": true })} ` })} `;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/rooms.astro", undefined);

const $$file = "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/rooms.astro";
const $$url = "/rooms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Rooms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
