import{_ as n}from"./preload-helper.CLcXU_4U.js";document.addEventListener("DOMContentLoaded",()=>{n(()=>import("./lightgallery.es5.CkpBqRe3.js"),[]).then(t=>{n(()=>import("./lg-thumbnail.es5.rYaIvPuQ.js"),[]).then(l=>{n(()=>import("./lg-zoom.es5.Csd6qRPt.js"),[]).then(e=>{const i=document.getElementById("lightgallery");i&&t.default(i,{plugins:[l.default,e.default],speed:500})})})});const a=document.querySelectorAll(".filter-btn"),r=document.querySelectorAll(".gallery-item");a.forEach(t=>{t.addEventListener("click",()=>{a.forEach(e=>e.classList.remove("active")),t.classList.add("active");const l=t.getAttribute("data-filter")||"all";r.forEach(e=>{e instanceof HTMLElement&&(l==="all"||e.classList.contains(l)?e.style.display="block":e.style.display="none")})})})});
