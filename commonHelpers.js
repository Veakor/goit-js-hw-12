import{i as d,a as I,S as b}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const m="42207002-bb01baf83cbb3b924a651843b",n=document.getElementById("searchInput"),c=document.getElementById("searchButton"),o=document.getElementById("imageContainer"),e=document.getElementById("loadingIndicator"),t=document.getElementById("searchForm");if(!t||!n||!c||!o||!e){console.error("One or more elements not found.");return}t.addEventListener("submit",async r=>{r.preventDefault();const a=n.value.trim();a?(s(),await g(a)):d.error({title:"Error",message:"Please enter a search term."})});function s(){e.style.display="block"}function f(){e&&e.style.display!=="none"&&(e.style.display="none")}async function g(r){s();const a=`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const l=(await I.get(a)).data;l.hits&&l.hits.length>0?(u(),h(l.hits)):(d.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}),u())}catch(i){d.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),console.error(i)}finally{f()}}const p=new b(".card-link");function h(r){const a=r.map(i=>y(i)).join("");o.innerHTML=a,p.refresh()}function y(r){return`
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
  `}function u(){o.innerHTML=""}});
//# sourceMappingURL=commonHelpers.js.map
