const a=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};a();function s(e,c){const i=document.querySelector(".cart_content > .list");let n="";e.forEach(t=>{n+=f(t)}),i.innerHTML=n,h(e,c)}function f({id:e,text:c,checked:i}){return`<li data-id="${e}">
     <label class="checkbox" for="">
        <input type="checkbox" ${i}/>
        <span>${c}</span>
     </label>
     <a href="#" class="delete"></a>
  </li>`}function h(e,c){const i=document.querySelector(".list_footer > p");if(c){const n=e.filter(t=>t.checked=="checked");i.innerHTML=`${n.length} \u500B\u5DF2\u5B8C\u6210\u9805\u76EE`}else{const n=e.filter(t=>t.checked!="checked");i.innerHTML=`${n.length} \u500B\u5F85\u5B8C\u6210\u9805\u76EE`}}function k(e){document.querySelector(".cart_content > .list").addEventListener("click",i=>{var o;const n=i.target,t=parseInt((o=n.closest("li"))==null?void 0:o.dataset.id);if(n.classList.value=="delete"){const l=e.findIndex(d=>d.id==t);e.splice(l,1)}else m(e,t);s(e)})}function m(e,c){e.forEach((i,n)=>{i.id==c&&(e[n].checked=="checked"?e[n].checked="":e[n].checked="checked")})}function p(e){document.querySelector(".list_footer").addEventListener("click",()=>{e.splice(0),s(e)})}function b(e){const c=document.querySelector(".card_list > .tab");c.addEventListener("click",i=>{const n=i.target,t=n.dataset.tab;for(let r=0;r<c.children.length;r++)c.children.item(r).classList.remove("active");switch(n.classList.add("active"),t){case"\u5168\u90E8":s(e);break;case"\u5F85\u5B8C\u6210":const r=e.filter(l=>l.checked!="checked");s(r);break;case"\u5DF2\u5B8C\u6210":const o=e.filter(l=>l.checked=="checked");s(o,"\u5DF2\u5B8C\u6210");break}})}function y(e){const c=document.querySelector(".card input");document.querySelector(".btn_add").addEventListener("click",()=>{u(e,c)}),c.addEventListener("keyup",n=>{n.key=="Enter"&&u(e,c)})}function u(e,c){if(c.value.trim()!=""){const i={id:new Date().getTime(),text:c.value,checked:""};e.push(i),s(e),c.value=""}}function g(){const e=[];y(e),b(e),p(e),k(e)}g();