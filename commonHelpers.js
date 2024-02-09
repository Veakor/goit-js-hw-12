import{i as l,S as y}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const d="42207002-bb01baf83cbb3b924a651843b",o=document.getElementById("searchInput"),c=document.getElementById("searchButton"),s=document.getElementById("imageContainer"),e=document.getElementById("loadingIndicator"),t=document.getElementById("searchForm");if(!t||!o||!c||!s||!e){console.error("One or more elements not found.");return}t.addEventListener("submit",r=>{r.preventDefault();const a=o.value.trim();a?(i(),f(a)):l.error({title:"Error",message:"Please enter a search term."})});function i(){e.style.display="block"}function u(){e&&e.style.display!=="none"&&(e.style.display="none")}function f(r){i();const a=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(a).then(n=>n.json()).then(n=>{n.hits&&n.hits.length>0?(m(),h(n.hits)):(l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}),m())}).catch(n=>{l.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),console.error(n)}).finally(()=>{u()})}const g=new y(".card-link");function h(r){const a=r.map(n=>p(n)).join("");s.innerHTML=a,g.refresh()}function p(r){return`
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
  `}function m(){s.innerHTML=""}});
//# sourceMappingURL=commonHelpers.js.map
