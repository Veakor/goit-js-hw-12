import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', function(){
  const apiKey = '42207002-bb01baf83cbb3b924a651843b';
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const imageContainer = document.getElementById('imageContainer');
  const loadingIndicator = document.getElementById('loadingIndicator');
  const loadMoreButton = document.getElementById('loadMoreButton');
  const searchForm = document.getElementById('searchForm');

  let currentPage = 1;
  let currentSearchTerm = '';
  let totalHits = 0;

  if (!searchForm || !searchInput || !searchButton || !imageContainer || !loadingIndicator || !loadMoreButton) {
      console.error('One or more elements not found.');
      return;
    }

  searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      currentSearchTerm = searchInput.value.trim();
      currentPage = 1; // Reset page number when submitting new search term
      if (currentSearchTerm) {
        showLoadingIndicator();
        await searchImages(currentSearchTerm, currentPage);
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Please enter a search term.',
        });
      }
    });

  loadMoreButton.addEventListener('click', async () => {
    currentPage++;
    showLoadingIndicator();
    await searchImages(currentSearchTerm, currentPage);
  });

  function showLoadingIndicator() {
      loadingIndicator.style.display = 'block';
    }
    
  function hideLoadingIndicator() {
      if(loadingIndicator && loadingIndicator.style.display !== 'none'){
      loadingIndicator.style.display = 'none';
    }
  }

  async function searchImages(query, page) {
    const perPage = 15;
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data.totalHits !== undefined) {
        totalHits = data.totalHits;
      }
      if (data.hits && data.hits.length > 0) {
        if (page === 1) {
          clearImages();
        }
        displayImages(data.hits);
        loadMoreButton.style.display = totalHits > imageContainer.children.length ? 'block' : 'none'; // Show load more button only if there are more images to load
      } else {
        if (page === 1) {
          clearImages();
          iziToast.info({
            title: 'Info',
            message: 'Sorry, there are no images matching your search query. Please try again.',
          });
        } else {
          iziToast.info({
            title: 'Info',
            message: 'No more images to load.',
          });
        }
        loadMoreButton.style.display = 'none';
      }
      // Прокрутка сторінки після завантаження кожної наступної групи зображень
      smoothScrollToNextGroup();
    } catch(error) {
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images. Please try again.',
      });
      console.error(error);
    } finally {
      hideLoadingIndicator();
    }
  }

  const lightbox = new SimpleLightbox('.card-link');
  function displayImages(images) {
    const html = images.map(image => generateImageCard(image)).join('');
    imageContainer.innerHTML += html; // Append new images to the existing ones
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

  function smoothScrollToNextGroup() {
    // Отримуємо висоту однієї карточки галереї
    const cardHeight = document.querySelector('.image-card').getBoundingClientRect().height;

    // Прокручуємо сторінку на дві висоти карточки галереї з плавною анімацією
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth'
    });
  }
});