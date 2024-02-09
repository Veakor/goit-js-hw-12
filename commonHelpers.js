import{i as d,a as $,S as x}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const m="42207002-bb01baf83cbb3b924a651843b",n=document.getElementById("searchInput"),u=document.getElementById("searchButton"),r=document.getElementById("imageContainer"),e=document.getElementById("loadingIndicator"),t=document.getElementById("loadMoreButton"),s=document.getElementById("searchForm");let c=1,l="",g=0;if(!s||!n||!u||!r||!e||!t){console.error("One or more elements not found.");return}s.addEventListener("submit",async o=>{o.preventDefault(),l=n.value.trim(),c=1,l?(f(),await p(l,c)):d.error({title:"Error",message:"Please enter a search term."})}),t.addEventListener("click",async()=>{c++,f(),await p(l,c)});function f(){e.style.display="block"}function b(){e&&e.style.display!=="none"&&(e.style.display="none")}async function p(o,a){const E=`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=15`;try{const i=(await $.get(E)).data;i.totalHits!==void 0&&(g=i.totalHits),i.hits&&i.hits.length>0?(a===1&&h(),v(i.hits),t.style.display=g>r.children.length?"block":"none"):(a===1?(h(),d.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."})):d.info({title:"Info",message:"No more images to load."}),t.style.display="none"),B()}catch(I){d.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),console.error(I)}finally{b()}}const L=new x(".card-link");function v(o){const a=o.map(y=>w(y)).join("");r.innerHTML+=a,L.refresh()}function w(o){return`
      <div class="image-card">
        <a href="${o.largeImageURL}" class="card-link" data-lightbox="image">
          <img src="${o.webformatURL}" alt="${o.tags}" class="card-image">
        </a>
        <div class="card-details">
          <p class="card-text"><strong>Likes:</strong> ${o.likes}</p>
          <p class="card-text"><strong>Views:</strong> ${o.views}</p>
        </div>
        <div class="card-details">
          <p class="card-text"><strong>Comments:</strong> ${o.comments}</p>
          <p class="card-text"><strong>Downloads:</strong> ${o.downloads}</p>
        </div>
      </div>
    `}function h(){r.innerHTML=""}function B(){const o=document.querySelector(".image-card").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}});
//# sourceMappingURL=commonHelpers.js.map
