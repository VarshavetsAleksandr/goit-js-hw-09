!function(){var t,n={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};n.btnStart.addEventListener("click",(function(){return n.btnStart.disabled=!0,n.btnStop.disabled=!1,t=setInterval((function(){n.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.btnStop.addEventListener("click",(function(){n.btnStart.disabled=!1,n.btnStop.disabled=!0,clearInterval(t)})),n.btnStop.disabled=!0}();
//# sourceMappingURL=01-color-switcher.c5656183.js.map
