import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';


  
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const imageContainer = document.getElementById('imageContainer');
  const loadingIndicator = document.getElementById('loadingIndicator');
  const loadMoreButton = document.getElementById('loadMoreButton');
  const searchForm = document.getElementById('searchForm'); 
  const endOfResultsMessage = document.getElementById('endOfResultsMessage'); 


  document.addEventListener('DOMContentLoaded', async function(){
  const apiKey = '42207002-bb01baf83cbb3b924a651843b';
  let currentPage = 1;
  let currentSearchTerm = '';
  let totalHits = 0; 
  
  

  searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const searchTerm = searchInput.value.trim();
    
      if (searchTerm) {
          currentSearchTerm = searchTerm; 
          currentPage = 1; 
          showLoadingIndicator();
          try {
              await searchImages(currentSearchTerm, currentPage);
              handleLoadMoreButtonVisibility(); 
          } catch (error) {
            console.error('Error occurred during search:', error);
          } finally {
              hideLoadingIndicator();
              
          }
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
      try {
        await searchImages(currentSearchTerm, currentPage);
        handleLoadMoreButtonVisibility();
      } catch (error) {
          console.error('Error occurred during search:', error);
      } finally {
        hideLoadingIndicator();
         
      }
  });

  function displayImages(images) {
    clearImages();
    const html = images.map(image => generateImageCard(image)).join('');
    imageContainer.innerHTML += html; 
    lightbox.refresh();
  }

  function showLoadingIndicator() {
      loadingIndicator.style.display = 'block';
  }
  
  function hideLoadingIndicator() {
      loadingIndicator.style.display = 'none';
      }
  

  async function searchImages(query, page) {
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`; 

      try {
          const response = await axios.get(url);
          const data = response.data;

          if (data.hits && data.hits.length > 0) {
            totalHits = data.totalHits;
            if (page === 1) {
                clearImages(); 
            }
            displayImages(data.hits);
            handleLoadMoreButtonVisibility();
          } else {
              if (page === 1) { 
                  iziToast.info({
                      title: 'Info',
                      message: 'Sorry, there are no images matching your search query. Please try again.',
                  });
                  clearImages();
              } else { 
                  loadMoreButton.style.display = 'none';
              }
          }
      } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images. Please try again.',
        });
         
      }
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

  function handleLoadMoreButtonVisibility() {
    
    if (totalHits === 0 || imageContainer.children.length === 0) {
      
        loadMoreButton.style.display = 'none';
        endOfResultsMessage.textContent = "We're sorry, but you've reached the end of search results.";
    } else {
        const displayedImagesCount = currentPage * 40;
        console.log("Total hits:", totalHits);
        console.log("Displayed images count:", displayedImagesCount);

        if (totalHits > displayedImagesCount) { 
            loadMoreButton.style.display = 'block';
            endOfResultsMessage.textContent = '';
        } else { 
            loadMoreButton.style.display = 'none';
            endOfResultsMessage.textContent = "We're sorry, but you've reached the end of search results.";
        }
    }

}
});