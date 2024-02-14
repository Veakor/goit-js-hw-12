import{i as h,a as B,S as x}from"./assets/vendor-5401a4b0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",async function(){const p="42207002-bb01baf83cbb3b924a651843b",i=document.getElementById("searchInput");document.getElementById("searchButton");const l=document.getElementById("imageContainer"),o=document.getElementById("loadingIndicator"),e=document.getElementById("loadMoreButton"),r=document.getElementById("searchForm"),s=document.getElementById("endOfResultsMessage");let a=1,d="",b=0;r.addEventListener("submit",async t=>{t.preventDefault();const n=i.value.trim();if(n){d=n,a=1,m(),I();try{await g(d,a)}catch(c){console.error("Error occurred during search:",c)}finally{y(),f()}}else h.error({title:"Error",message:"Please enter a search term."})}),e.addEventListener("click",async()=>{a++,I();try{await g(d,a)}catch(t){console.error("Error occurred during search:",t)}finally{y(),f()}});function I(){o.style.display="block"}function y(){o&&o.style.display!=="none"&&(o.style.display="none")}async function g(t,n){const c=`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=15`;try{const u=(await B.get(c)).data;u.hits&&u.hits.length>0?(b=u.totalHits,n===1&&m(),E(u.hits)):n===1?(h.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}),m()):e.style.display="none"}catch{throw h.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),new Error("An error occurred while fetching images. Please try again.")}}const L=new x(".card-link");function E(t){const n=t.map(c=>w(c)).join("");l.insertAdjacentHTML("beforeend",n),L.refresh()}(async function(){try{await g(d,a)}catch(t){console.error("Error occurred during search:",t)}finally{y(),f()}})();function w(t){return`
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
      `}function m(){l.innerHTML=""}function f(){b>a*40?(e.style.display="block",s.style.display="none"):(e.style.display="none",s.style.display="block",s.innerText="We're sorry, but you've reached the end of search results.")}});
//# sourceMappingURL=commonHelpers.js.map
