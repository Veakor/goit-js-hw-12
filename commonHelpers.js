import{i,a as w,S as E}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const d="42207002-bb01baf83cbb3b924a651843b",n=document.getElementById("searchInput"),c=document.getElementById("searchButton"),s=document.getElementById("imageContainer"),e=document.getElementById("loadingIndicator"),t=document.getElementById("searchForm");let o=1,f="";if(!t||!n||!c||!s||!e){console.error("One or more elements not found.");return}t.addEventListener("submit",async r=>{r.preventDefault(),n.value.trim(),o=1,i.error({title:"Error",message:"Please enter a search term."})}),loadMoreButton.addEventListener("click",async()=>{o++,p(),await h(f,o)});function p(){e.style.display="block"}function y(){e&&e.style.display!=="none"&&(e.style.display="none")}async function h(r,a){const v=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=15`;try{const l=(await w.get(v)).data;l.hits&&l.hits.length>0?(a===1&&u(),b(l.hits),loadMoreButton.style.display="block"):(a===1?(u(),i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."})):i.info({title:"Info",message:"No more images to load."}),loadMoreButton.style.display="none")}catch(g){i.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),console.error(g)}finally{y()}}const I=new E(".card-link");function b(r){const a=r.map(m=>L(m)).join("");s.innerHTML+=a,I.refresh()}function L(r){return`
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
  `}function u(){s.innerHTML=""}});
//# sourceMappingURL=commonHelpers.js.map
