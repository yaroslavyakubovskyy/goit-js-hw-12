import{S as L,a as u,i as n}from"./assets/vendor-CkdzJWux.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const v=({largeImageURL:t,webformatURL:r,tags:o,likes:c,views:e,comments:a,downloads:i})=>`
    <div class="gallery-wrapper">
        <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${r}" alt="${o}">
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <p class="gallery-info-title">Likes</p>
            <p class="gallery-info-value">${c}</p>
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
            <p class="gallery-info-value">${i}</p>
          </li>
        </ul>
        </a>
      </div>
    `,y=t=>t.map(r=>v(r)).join(""),m=new L(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"});u.defaults.baseURL="https://pixabay.com/api/";const p=async(t,r)=>{try{const o={q:t,page:r,key:"49370474-a1716903616cca1a00d36cfab",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return await u.get("",{params:o})}catch(o){console.log(o.message)}},s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")},M=15;let g,l,d,f;s.loader.style.display="none";function h(){s.loader.style.display="block"}function b(){s.loader.style.display="none"}const w=async t=>{try{if(t.preventDefault(),l=1,s.gallery.innerHTML="",s.btnLoadMore.classList.remove("is-visible"),d=t.currentTarget.elements.search_text.value.trim(),d===""){n.error({title:"Error",message:"Input cannot be empty!",position:"topRight"}),s.btnLoadMore.classList.remove("is-visible"),t.currentTarget.elements.search_text.value="";return}h();const{data:{hits:r}}=await p(d,l);if(r.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.searchForm.reset(),s.btnLoadMore.classList.remove("is-visible");return}s.gallery.innerHTML=y(r),m.refresh(),l+=1,s.btnLoadMore.classList.add("is-visible"),f=document.querySelector(".gallery-wrapper").getBoundingClientRect().height}catch(r){n.error({title:"Error",message:r.message})}finally{b()}},P=async()=>{try{h();const{data:{totalHits:t,hits:r}}=await p(d,l);if(s.gallery.insertAdjacentHTML("beforeend",y(r)),m.refresh(),window.scrollBy({top:f*2,left:0,behavior:"smooth"}),g=Math.ceil(t/M),l===g){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),s.btnLoadMore.classList.remove("is-visible");return}l+=1,s.btnLoadMore.classList.add("is-visible")}catch(t){n.error({message:t.message,position:"topRight"}),console.log(t.message)}finally{b()}};s.searchForm.addEventListener("submit",w);s.btnLoadMore.addEventListener("click",P);
//# sourceMappingURL=index.js.map
