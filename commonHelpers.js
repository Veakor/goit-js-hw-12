import{i as m,a as I,S as b}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const l="42207002-bb01baf83cbb3b924a651843b",o=document.getElementById("searchInput"),c=document.getElementById("searchButton"),n=document.getElementById("imageContainer"),e=document.getElementById("loadingIndicator"),t=document.getElementById("searchForm");if(!t||!o||!c||!n||!e){console.error("One or more elements not found.");return}t.addEventListener("submit",async r=>{r.preventDefault();const s=o.value.trim();if(s){a();try{await g(s)}catch(i){console.error("Error occurred during search:",i)}finally{f()}}else m.error({title:"Error",message:"Please enter a search term."})});function a(){e.style.display="block"}function f(){e&&e.style.display!=="none"&&(e.style.display="none")}async function g(r){const s=`https://pixabay.com/api/?key=${l}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const d=(await I.get(s)).data;d.hits&&d.hits.length>0?(u(),h(d.hits)):(m.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}),u())}catch{throw new Error("An error occurred while fetching images. Please try again.")}}const p=new b(".card-link");function h(r){const s=r.map(i=>y(i)).join("");n.innerHTML=s,p.refresh()}function y(r){return`
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
      `}function u(){n.innerHTML=""}});
//# sourceMappingURL=commonHelpers.js.map
