import{S as h,a as p,i as l}from"./assets/vendor-CkdzJWux.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const b=({largeImageURL:r,webformatURL:t,tags:o,likes:d,views:e,comments:a,downloads:n})=>`
    <div class="gallery-wrapper">
        <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${t}" alt="${o}">
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <p class="gallery-info-title">Likes</p>
            <p class="gallery-info-value">${d}</p>
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
    `,m=r=>r.map(t=>b(t)).join(""),y=function(){new h(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}).refresh()};p.defaults.baseURL="https://pixabay.com";const f=(r,t)=>{const o={q:r,currentPage:t,key:"49370474-a1716903616cca1a00d36cfab",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return p.get("/api/",{params:o})},s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")},L=15;let u,i,g;s.loader.style.display="none";function v(){s.loader.style.display="block"}function c(){s.loader.style.display="none"}const M=async r=>{try{if(r.preventDefault(),i=1,s.gallery.innerHTML="",v(),g=r.currentTarget.elements.search_text.value.trim(),g===""){l.error,l.error({title:"Error",message:"Input cannot be empty!",position:"topRight"}),c(),s.btnLoadMore.classList.remove("is-visible"),r.currentTarget.elements.search_text.value="";return}const{data:{hits:t}}=await f(g,i);if(t.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.searchForm.reset(),s.btnLoadMore.classList.remove("is-visible"),c();return}s.gallery.innerHTML=m(t),y(),c(),i+=1,s.btnLoadMore.classList.add("is-visible");const o=document.querySelector(".gallery-wrapper").getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}catch(t){l.error({title:"Error",message:t.message}),c()}};s.searchForm.addEventListener("submit",M);s.btnLoadMore.addEventListener("click",async()=>{try{const{data:{totalHits:r,hits:t}}=await f(g,i);if(c(),s.gallery.insertAdjacentHTML("beforeend",m(t)),y(),u=Math.ceil(r/L),i===u){l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),s.btnLoadMore.classList.remove("is-visible");return}i+=1,s.btnLoadMore.classList.add("is-visible")}catch(r){l.error({message:r.message,position:"topRight"}),console.log(r.message)}});
//# sourceMappingURL=index.js.map
