const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body");let a;function r(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.setAttribute("disabled","disabled"),t.onclick=()=>{a=setInterval(r,1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled","disabled")},e.onclick=()=>{clearInterval(a),t.removeAttribute("disabled","disabled"),e.setAttribute("disabled","disabled")};
//# sourceMappingURL=01-color-switcher.037713b1.js.map
