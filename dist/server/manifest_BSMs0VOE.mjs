import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as decodeKey } from './chunks/astro/server_Bk8wKb1T.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B5h89wo6.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/craig.sykes/OneDrive%20-%20Musgrave%20Group/Documents/UCD/Davmar_House_Project/","cacheDir":"file:///C:/Users/craig.sykes/OneDrive%20-%20Musgrave%20Group/Documents/UCD/Davmar_House_Project/node_modules/.astro/","outDir":"file:///C:/Users/craig.sykes/OneDrive%20-%20Musgrave%20Group/Documents/UCD/Davmar_House_Project/dist/","srcDir":"file:///C:/Users/craig.sykes/OneDrive%20-%20Musgrave%20Group/Documents/UCD/Davmar_House_Project/src/","publicDir":"file:///C:/Users/craig.sykes/OneDrive%20-%20Musgrave%20Group/Documents/UCD/Davmar_House_Project/public/","buildClientDir":"file:///C:/Users/craig.sykes/OneDrive%20-%20Musgrave%20Group/Documents/UCD/Davmar_House_Project/dist/client/","buildServerDir":"file:///C:/Users/craig.sykes/OneDrive%20-%20Musgrave%20Group/Documents/UCD/Davmar_House_Project/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.js","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/attractions","isIndex":false,"type":"page","pattern":"^\\/attractions\\/?$","segments":[[{"content":"attractions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/attractions.astro","pathname":"/attractions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".contact-form[data-astro-cid-svshx33u]{max-width:600px;margin:2rem auto;padding:2rem;background:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a}.contact-form[data-astro-cid-svshx33u] .form-group[data-astro-cid-svshx33u]{margin-bottom:1rem}.contact-form[data-astro-cid-svshx33u] label[data-astro-cid-svshx33u]{font-weight:700;color:#12763e;display:block;margin-bottom:5px}.contact-form[data-astro-cid-svshx33u] input[data-astro-cid-svshx33u],.contact-form[data-astro-cid-svshx33u] textarea[data-astro-cid-svshx33u]{width:100%;padding:10px;border:1px solid #ccc;border-radius:5px;font-size:1rem}.contact-form[data-astro-cid-svshx33u] textarea[data-astro-cid-svshx33u]{resize:vertical}.contact-form[data-astro-cid-svshx33u] .submit-btn[data-astro-cid-svshx33u]{background-color:#12763e;color:#fff;border:none;padding:10px 15px;font-size:1.1rem;cursor:pointer;border-radius:5px;width:100%;transition:background .3s ease}.contact-form[data-astro-cid-svshx33u] .submit-btn[data-astro-cid-svshx33u]:hover{background-color:#0e5b2e}#response-message[data-astro-cid-svshx33u]{margin-top:1rem;font-weight:700;text-align:center}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.Q9hC0nNs.css"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".room-card[data-astro-cid-v73b7rkq]{width:100%;max-width:350px;background:#fff;padding:1rem;border-radius:8px;box-shadow:0 4px 8px #0000001a;text-align:center;transition:transform .2s ease-in-out;min-height:450px}.room-card[data-astro-cid-v73b7rkq]:hover{transform:scale(1.02)}.card-img-top[data-astro-cid-v73b7rkq]{width:100%;height:200px;object-fit:cover;border-radius:8px 8px 0 0}.card-body[data-astro-cid-v73b7rkq]{display:flex;flex-direction:column;justify-content:space-between}.room-price[data-astro-cid-v73b7rkq]{font-size:1.2rem;color:#12763e;font-weight:700}.rooms-list[data-astro-cid-3i3fq6ls]{margin-bottom:4rem}.rooms-hero[data-astro-cid-h5cpthjk]{text-align:center;padding:2rem}.rooms-list[data-astro-cid-h5cpthjk]{display:flex;justify-content:center;flex-wrap:wrap;gap:20px}.facilities[data-astro-cid-h5cpthjk]{text-align:center;margin:3rem 0}.facilities[data-astro-cid-h5cpthjk] h2[data-astro-cid-h5cpthjk]{font-size:1.8rem;margin-bottom:1.5rem;color:#12763e}.facility-box[data-astro-cid-h5cpthjk]{background-color:#f5f5f5;padding:20px;border-radius:10px;box-shadow:0 2px 5px #0000001a;text-align:left}.facility-box[data-astro-cid-h5cpthjk] h3[data-astro-cid-h5cpthjk]{font-size:1.5rem;color:#12763e;margin-bottom:1rem}.facility-box[data-astro-cid-h5cpthjk] ul[data-astro-cid-h5cpthjk]{list-style:none;padding:0}.facility-box[data-astro-cid-h5cpthjk] li[data-astro-cid-h5cpthjk]{font-size:1rem;padding:5px 0;color:#333;display:flex;align-items:center}@media (max-width: 768px){.row[data-astro-cid-h5cpthjk]{flex-direction:column}.facility-box[data-astro-cid-h5cpthjk]{margin-bottom:20px}}\n"}],"routeData":{"route":"/rooms","isIndex":false,"type":"page","pattern":"^\\/rooms\\/?$","segments":[[{"content":"rooms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rooms.astro","pathname":"/rooms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CHnJsdj7.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/pages/rooms.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/contact@_@js":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/attractions@_@astro":"pages/attractions.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/rooms@_@astro":"pages/rooms.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BSMs0VOE.mjs","C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DLpmIbtP.mjs","C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.BhEPy-kX.js","C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts":"_astro/ContactForm.astro_astro_type_script_index_0_lang.DNNLsByO.js","C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/GalleryGrid.astro?astro&type=script&index=0&lang.ts":"_astro/GalleryGrid.astro_astro_type_script_index_0_lang.BPQwAaVE.js","C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/node_modules/swiper/swiper.mjs":"_astro/swiper.DHpTjEQq.js","C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/node_modules/swiper/modules/index.mjs":"_astro/index.BKW1jnFD.js","C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/node_modules/lightgallery/lightgallery.es5.js":"_astro/lightgallery.es5.CkpBqRe3.js","C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js":"_astro/lg-thumbnail.es5.rYaIvPuQ.js","C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js":"_astro/lg-zoom.es5.Csd6qRPt.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/craig.sykes/OneDrive - Musgrave Group/Documents/UCD/Davmar_House_Project/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const t=document.getElementById(\"contact-form\");if(!(t instanceof HTMLFormElement)){console.error(\"Form element not found or incorrect type.\");return}const e=document.getElementById(\"response-message\");if(!e){console.error(\"Response message element not found.\");return}t.addEventListener(\"submit\",async function(o){o.preventDefault();const s=new FormData(t);try{const n=await(await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(Object.fromEntries(s))})).json();e.style.display=\"block\",e.style.color=n.success?\"green\":\"red\",e.textContent=n.success?\"✅ Message received!\":\"❌ Error submitting form.\",n.success&&t.reset()}catch{e.style.display=\"block\",e.style.color=\"red\",e.textContent=\"❌ Failed to submit. Try again later.\"}})});"]],"assets":["/_astro/loading.BZOHaeKn.gif","/_astro/lg.oyjwlqP2.ttf","/_astro/lg.CosQH4Cu.woff","/_astro/lg.B0dIV2BS.svg","/_astro/gallery.Q9hC0nNs.css","/_astro/index.CHnJsdj7.css","/davmar_house_logo.svg","/favicon.svg","/hero_images/Hero01.png","/hero_images/Hero02.jpg","/hero_images/Hero03.png","/gallery_images/DeluxeRoom1.jpg","/gallery_images/DeluxeRoom2.jpg","/gallery_images/DeluxeRoom3.jpg","/gallery_images/DeluxeRoom4.jpg","/gallery_images/DeluxeRoom5.jpg","/gallery_images/DeluxeRoom6.jpg","/gallery_images/StandardRoom1.jpg","/gallery_images/StandardRoom2.jpg","/gallery_images/StandardRoom3.jpg","/gallery_images/StandardRoom4.jpg","/gallery_images/StandardRoom5.jpg","/gallery_images/StandardRoom6.jpg","/gallery_images/SuiteRoom1.jpg","/gallery_images/SuiteRoom2.jpg","/gallery_images/SuiteRoom3.jpg","/gallery_images/SuiteRoom4.jpg","/gallery_images/SuiteRoom5.jpg","/gallery_images/SuiteRoom6.jpg","/gallery_images/SuiteRoom7.jpg","/gallery_images/SuiteRoom8.jpg","/gallery_images/SuiteRoom9.jpg","/_astro/GalleryGrid.astro_astro_type_script_index_0_lang.BPQwAaVE.js","/_astro/Hero.astro_astro_type_script_index_0_lang.BhEPy-kX.js","/_astro/index.BKW1jnFD.js","/_astro/lg-thumbnail.es5.rYaIvPuQ.js","/_astro/lg-zoom.es5.Csd6qRPt.js","/_astro/lightgallery.es5.CkpBqRe3.js","/_astro/preload-helper.CLcXU_4U.js","/_astro/swiper.DHpTjEQq.js","/_astro/utils.CndlQX13.js","/room_images/DELroom.jpg","/room_images/STDroom.jpg","/room_images/SUITEroom.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"rOzLpkiKGu+TwDbfHo3fsyMJ3/nmVRMYPOIyIxVuWVE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
