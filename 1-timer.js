import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i}from"./assets/vendor-BbbuE1sJ.js";const r=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");let s=null,d=null;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n<=new Date?(i.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),t.disabled=!0):(s=n,t.disabled=!1)}};y(r,D);t.disabled=!0;t.addEventListener("click",()=>{s&&(t.disabled=!0,r.disabled=!0,d=setInterval(()=>{const e=s-new Date;if(e<=0){clearInterval(d),i.success({title:"Finished",message:"Countdown complete!",position:"topRight"}),C();return}c(q(e))},1e3))});function c({days:e,hours:n,minutes:a,seconds:u}){p.textContent=o(e),b.textContent=o(n),S.textContent=o(a),g.textContent=o(u)}function C(){r.disabled=!1,t.disabled=!0,c({days:0,hours:0,minutes:0,seconds:0})}function o(e){return String(e).padStart(2,"0")}function q(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}
//# sourceMappingURL=1-timer.js.map
