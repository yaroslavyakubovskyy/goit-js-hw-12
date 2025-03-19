import{S as L,a as m,i as c}from"./assets/vendor-DyqkKiSr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const v=({largeImageURL:t,webformatURL:r,tags:o,likes:d,views:e,comments:a,downloads:i})=>`
    <div class="gallery-wrapper">
        <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${r}" alt="${o}">
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
            <p class="gallery-info-value">${i}</p>
          </li>
        </ul>
        </a>
      </div>
    `,p=t=>t.map(r=>v(r)).join(""),y=new L(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"});m.defaults.baseURL="https://pixabay.com/api/";const f=async(t,r)=>{try{const o={q:t,page:r,key:"49370474-a1716903616cca1a00d36cfab",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return await m.get("",{params:o})}catch(o){console.log(o.message)}},s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")},M=15;let u,l,g,h;s.loader.style.display="none";function b(){s.loader.style.display="block"}function n(){s.loader.style.display="none"}const w=async t=>{try{if(t.preventDefault(),l=1,s.gallery.innerHTML="",b(),s.btnLoadMore.classList.remove("is-visible"),g=t.currentTarget.elements.search_text.value.trim(),g===""){c.error({title:"Error",message:"Input cannot be empty!",position:"topRight"}),n(),s.btnLoadMore.classList.remove("is-visible"),t.currentTarget.elements.search_text.value="";return}const{data:{hits:r}}=await f(g,l);if(r.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.searchForm.reset(),s.btnLoadMore.classList.remove("is-visible"),n();return}s.gallery.innerHTML=p(r),y.refresh(),n(),l+=1,s.btnLoadMore.classList.add("is-visible"),h=document.querySelector(".gallery-wrapper").getBoundingClientRect().height}catch(r){c.error({title:"Error",message:r.message}),n()}},P=async()=>{try{b();const{data:{totalHits:t,hits:r}}=await f(g,l);if(s.gallery.insertAdjacentHTML("beforeend",p(r)),y.refresh(),window.scrollBy({top:h*2,left:0,behavior:"smooth"}),u=Math.ceil(t/M),l===u){c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),s.btnLoadMore.classList.remove("is-visible");return}l+=1,s.btnLoadMore.classList.add("is-visible")}catch(t){c.error({message:t.message,position:"topRight"}),console.log(t.message)}finally{n()}};s.searchForm.addEventListener("submit",w);s.btnLoadMore.addEventListener("click",P);
//# sourceMappingURL=index.js.map
