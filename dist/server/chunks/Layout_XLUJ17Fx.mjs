import { e as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, k as renderSlot, l as renderHead } from './astro/server_Bk8wKb1T.mjs';
import 'kleur/colors';
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar navbar-expand-lg custom-navbar"> <div class="container"> <!-- Logo and home button--> <a class="navbar-brand d-flex align-items-center" href="/"> <img src="/davmar_house_logo.svg" alt="Davmar House Logo" width="100" height="100" class="me-2"> </a> <!-- Mobile Toggle Button --> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <!-- Navbar Links --> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link" href="/gallery">Gallery</a> </li> <li class="nav-item"> <a class="nav-link" href="/rooms">Rooms</a> </li> <li class="nav-item"> <a class="nav-link" href="/attractions">Nearby Attractions</a> </li> <li class="nav-item"> <a class="nav-link" href="/contact">Contact Us</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/Navbar.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer py-3"> <div class="container text-center"> <!-- Quick Links --> <ul class="footer-links list-unstyled d-flex justify-content-center mb-3"> <li><a href="/" class="footer-link">Home</a></li> <li><a href="/gallery" class="footer-link">Gallery</a></li> <li><a href="/rooms" class="footer-link">Rooms</a></li> <li><a href="/attractions" class="footer-link">Nearby Attractions</a></li> <li><a href="/contact" class="footer-link">Contact Us</a></li> </ul> <!-- Social Media Icons --> <div class="social-icons"> <a href="https://www.facebook.com" target="_blank" class="footer-icon"> <i class="fab fa-facebook"></i> </a> <a href="https://www.instagram.com" target="_blank" class="footer-icon"> <i class="fab fa-instagram"></i> </a> </div> <!-- Copyright --> <p class="footer-text mt-2">&copy; 2024 Davmar House. All rights reserved.</p> </div> </footer>`;
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/Footer.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Davmar House</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"><!-- Bootstrap CSS --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><!-- Global Stylesheet --><link rel="stylesheet" href="/src/styles/global.css">', "</head> <body> ", " ", " ", ' <!-- Bootstrap JavaScript --> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous" defer><\/script> </body> </html>'])), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/layouts/Layout.astro", undefined);

export { $$Layout as $ };
