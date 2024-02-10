import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', function(){
const apiKey = '42207002-bb01baf83cbb3b924a651843b';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const imageContainer = document.getElementById('imageContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
const searchForm = document.getElementById('searchForm'); 

if (!searchForm || !searchInput || !searchButton || !imageContainer || !loadingIndicator) {
    console.error('One or more elements not found.');
    return;
  }

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
  
  if (searchTerm) {
    showLoadingIndicator();
    searchImages(searchTerm);
  } else {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
  }
});

function showLoadingIndicator() {
    loadingIndicator.style.display = 'block';
  }
  
function hideLoadingIndicator() {
    if(loadingIndicator && loadingIndicator.style.display !== 'none'){
    loadingIndicator.style.display = 'none';
  }
}

function searchImages(query) {
    showLoadingIndicator();

  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      if (data.hits && data.hits.length > 0) {

        clearImages();
        displayImages(data.hits);
      } else {
        iziToast.info({
          title: 'Info',
          message: 'Sorry, there are no images matching your search query. Please try again.',
        });

        clearImages();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images. Please try again.',
      });
      console.error(error);
    })

    .finally(() => {

        hideLoadingIndicator();
      });
}

const lightbox = new SimpleLightbox('.card-link');
function displayImages(images) {
  const html = images.map(image => generateImageCard(image)).join('');
  imageContainer.innerHTML = html;
  lightbox.refresh();
}


function generateImageCard(image) {
  return `
    <div class="image-card">
      <a href="${image.largeImageURL}" class="card-link" data-lightbox="image">
        <img src="${image.webformatURL}" alt="${image.tags}" class="card-image">
      </a>
      <div class="card-details">
        <p class="card-text"><strong>Likes:</strong> ${image.likes}</p>
        <p class="card-text"><strong>Views:</strong> ${image.views}</p>
      </div>
      <div class="card-details">
        <p class="card-text"><strong>Comments:</strong> ${image.comments}</p>
        <p class="card-text"><strong>Downloads:</strong> ${image.downloads}</p>
      </div>
    </div>
  `;
}

function clearImages() {
  imageContainer.innerHTML = '';
}
});