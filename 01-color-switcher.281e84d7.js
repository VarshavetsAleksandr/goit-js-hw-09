const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e;t.btnStart.addEventListener("click",(function(){return t.btnStart.disabled=!0,t.btnStop.disabled=!1,e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(e)})),t.btnStop.disabled=!0;
//# sourceMappingURL=01-color-switcher.281e84d7.js.map
