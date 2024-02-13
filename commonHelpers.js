import{i as I,a as B,S as x}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",async function(){const y="42207002-bb01baf83cbb3b924a651843b",a=document.getElementById("searchInput");document.getElementById("searchButton");const l=document.getElementById("imageContainer"),n=document.getElementById("loadingIndicator"),e=document.getElementById("loadMoreButton"),r=document.getElementById("searchForm"),o=document.getElementById("endOfResultsMessage");let i=1,u="",f=0;r.addEventListener("submit",async t=>{t.preventDefault();const s=a.value.trim();if(s){u=s,i=1,g();try{await h(u,i)}catch(c){console.error("Error occurred during search:",c)}finally{p(),b()}}else I.error({title:"Error",message:"Please enter a search term."})}),e.addEventListener("click",async()=>{i++,g();try{await h(u,i)}catch(t){console.error("Error occurred during search:",t)}finally{p(),b()}});function g(){n.style.display="block"}function p(){n&&n.style.display!=="none"&&(n.style.display="none")}async function h(t,s){const c=`https://pixabay.com/api/?key=${y}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=15`;try{const d=(await B.get(c)).data;d.hits&&d.hits.length>0?(f=d.totalHits,s===1&&m(),v(d.hits)):s===1?(I.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}),m()):e.style.display="none"}catch{throw new Error("An error occurred while fetching images. Please try again.")}}const L=new x(".card-link");function v(t){const s=t.map(c=>E(c)).join("");l.innerHTML+=s,m(),L.refresh()}function E(t){return`
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
        `}function m(){l.innerHTML=""}function b(){f>i*40?(e.style.display="block",o.style.display="none"):(e.style.display="none",o.style.display="block",o.innerText="We're sorry, but you've reached the end of search results.")}});
//# sourceMappingURL=commonHelpers.js.map
