import{i as p,a as L,S as v}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const u="42207002-bb01baf83cbb3b924a651843b",a=document.getElementById("searchInput");document.getElementById("searchButton");const i=document.getElementById("imageContainer"),n=document.getElementById("loadingIndicator"),e=document.getElementById("loadMoreButton"),r=document.getElementById("searchForm");let o=1,l="";r.addEventListener("submit",async t=>{t.preventDefault();const s=a.value.trim();if(s){l=s,o=1,m();try{await f(l,o)}catch(c){console.error("Error occurred during search:",c)}finally{g(),e.style.display="block"}}else p.error({title:"Error",message:"Please enter a search term."})}),e.addEventListener("click",async()=>{o++,m();try{await f(l,o)}catch(t){console.error("Error occurred during search:",t)}finally{g()}});function m(){n.style.display="block"}function g(){n&&n.style.display!=="none"&&(n.style.display="none")}async function f(t,s){const c=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=15`;try{const d=(await L.get(c)).data;d.hits&&d.hits.length>0?h(d.hits):s===1?p.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}):e.style.display="none"}catch{throw new Error("An error occurred while fetching images. Please try again.")}}const y=new v(".card-link");function h(t){const s=t.map(c=>I(c)).join("");i.innerHTML+=s,y.refresh()}function I(t){return`
          <div class="image-card">
              <a href="${t.largeImageURL}" class="card-link" data-lightbox="image">
                  <img src="${t.webformatURL}" alt="${t.tags}" class="card-image">
              </a>
              <div class="card-details">
                  <p class="card-text"><strong>Likes:</strong> ${t.likes}</p>
                  <p class="card-text"><strong>Views:</strong> ${t.views}</p>
              </div>
              <div class="card-details">
                  <p class="card-text"><strong>Comments:</strong> ${t.comments}</p>
                  <p class="card-text"><strong>Downloads:</strong> ${t.downloads}</p>
              </div>
          </div>
      `}});
//# sourceMappingURL=commonHelpers.js.map
