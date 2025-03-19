import{S as L,a as m,i as l}from"./assets/vendor-CkdzJWux.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&g(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function g(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const v=({largeImageURL:r,webformatURL:t,tags:o,likes:g,views:e,comments:a,downloads:n})=>`
    <div class="gallery-wrapper">
        <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${t}" alt="${o}">
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <p class="gallery-info-title">Likes</p>
            <p class="gallery-info-value">${g}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Views</p>
            <p class="gallery-info-value">${e}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Comments</p>
            <p class="gallery-info-value">${a}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Downloads</p>
            <p class="gallery-info-value">${n}</p>
          </li>
        </ul>
        </a>
      </div>
    `,p=r=>r.map(t=>v(t)).join(""),y=function(){new L(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}).refresh()};m.defaults.baseURL="https://pixabay.com/api/";const f=async(r,t)=>{try{const o={q:r,page:t,key:"49370474-a1716903616cca1a00d36cfab",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return await m.get("",{params:o})}catch(o){console.log(o.message)}},s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")},M=15;let u,i,d,h;s.loader.style.display="none";function b(){s.loader.style.display="block"}function c(){s.loader.style.display="none"}const w=async r=>{try{if(r.preventDefault(),i=1,s.gallery.innerHTML="",b(),s.btnLoadMore.classList.remove("is-visible"),d=r.currentTarget.elements.search_text.value.trim(),d===""){l.error,l.error({title:"Error",message:"Input cannot be empty!",position:"topRight"}),c(),s.btnLoadMore.classList.remove("is-visible"),r.currentTarget.elements.search_text.value="";return}const{data:{hits:t}}=await f(d,i);if(t.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.searchForm.reset(),s.btnLoadMore.classList.remove("is-visible"),c();return}s.gallery.innerHTML=p(t),y(),c(),i+=1,s.btnLoadMore.classList.add("is-visible"),h=document.querySelector(".gallery-wrapper").getBoundingClientRect().height}catch(t){l.error({title:"Error",message:t.message}),c()}},P=async()=>{try{b();const{data:{totalHits:r,hits:t}}=await f(d,i);if(s.gallery.insertAdjacentHTML("beforeend",p(t)),y(),window.scrollBy({top:h*2,left:0,behavior:"smooth"}),u=Math.ceil(r/M),i===u){l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),s.btnLoadMore.classList.remove("is-visible");return}i+=1,s.btnLoadMore.classList.add("is-visible")}catch(r){l.error({message:r.message,position:"topRight"}),console.log(r.message)}finally{c()}};s.searchForm.addEventListener("submit",w);s.btnLoadMore.addEventListener("click",P);
//# sourceMappingURL=index.js.map
