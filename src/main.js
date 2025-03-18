import iziToast from 'izitoast';

import {
  createGalleryCardTemplate,
  createLightBox,
} from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const refs = {
  searchForm: document.querySelector('.form'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.loader'),
};

refs.loader.style.display = 'none';

function showLoader() {
  refs.loader.style.display = 'block';
}

function hideLoader() {
  refs.loader.style.display = 'none';
}

const onSearchFormSubmit = event => {
  event.preventDefault();
  showLoader();

  const q = event.currentTarget.elements.search_text.value.trim();

  if (q === '') {
    iziToast.error({
      title: 'Error',
      message: 'Input cannot be empty!',
      color: '#ff0000',
    });
    return;
  }

  fetchPhotosByQuery(q)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });

        refs.searchForm.reset();
        refs.gallery.innerHTML = '';

        return;
      }
      const galleryCardsTemplate = data.hits
        .map(img => createGalleryCardTemplate(img))
        .join('');

      refs.gallery.innerHTML = galleryCardsTemplate;
      createLightBox();
    })
    .catch(err => {
      iziToast.error({ title: 'Error', message: error.message });
    })
    .finally(() => {
      hideLoader();
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
