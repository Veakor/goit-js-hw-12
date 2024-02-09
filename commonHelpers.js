import{i as d,a as $,S as B}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const u="42207002-bb01baf83cbb3b924a651843b",o=document.getElementById("searchInput"),m=document.getElementById("searchButton"),n=document.getElementById("imageContainer"),e=document.getElementById("loadingIndicator"),t=document.getElementById("loadMoreButton"),s=document.getElementById("searchForm");let c=1,l="",g=0;if(!s||!o||!m||!n||!e||!t){console.error("One or more elements not found.");return}s.addEventListener("submit",async r=>{r.preventDefault(),l=o.value.trim(),c=1,l?(f(),await p(l,c)):d.error({title:"Error",message:"Please enter a search term."})}),t.addEventListener("click",async()=>{c++,f(),await p(l,c)});function f(){e.style.display="block"}function b(){e&&e.style.display!=="none"&&(e.style.display="none")}async function p(r,a){const E=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=15`;try{const i=(await $.get(E)).data;i.totalHits!==void 0&&(g=i.totalHits),i.hits&&i.hits.length>0?(a===1&&y(),v(i.hits),t.style.display=g>n.children.length?"block":"none"):(a===1?(y(),d.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."})):d.info({title:"Info",message:"No more images to load."}),t.style.display="none")}catch(I){d.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),console.error(I)}finally{b()}}const L=new B(".card-link");function v(r){const a=r.map(h=>w(h)).join("");n.innerHTML+=a,L.refresh()}function w(r){return`
      <div class="image-card">
        <a href="${r.largeImageURL}" class="card-link" data-lightbox="image">
          <img src="${r.webformatURL}" alt="${r.tags}" class="card-image">
        </a>
        <div class="card-details">
          <p class="card-text"><strong>Likes:</strong> ${r.likes}</p>
          <p class="card-text"><strong>Views:</strong> ${r.views}</p>
        </div>
        <div class="card-details">
          <p class="card-text"><strong>Comments:</strong> ${r.comments}</p>
          <p class="card-text"><strong>Downloads:</strong> ${r.downloads}</p>
        </div>
      </div>
    `}function y(){n.innerHTML=""}});
//# sourceMappingURL=commonHelpers.js.map
