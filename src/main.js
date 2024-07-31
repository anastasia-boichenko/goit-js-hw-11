import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import fetchImages from './js/pixabay-api';
import renderImages from './js/render-functions';

const formElem = document.querySelector('.form');
const imgListElem = document.querySelector('.images-list');
const loaderElem = document.querySelector('.loader');
const inputElem = document.querySelector('.input');

formElem.addEventListener('submit', ev => {
  ev.preventDefault();
  imgListElem.innerHTML = '';
  loaderElem.classList.add('loader-open');

  const userValue = inputElem.value.trim();

  formElem.reset();
  if (!userValue) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    loaderElem.classList.remove('loader-open');
    return;
  }

  fetchImages(userValue)
    .then(data => {
      if (data.hits.length === 0) {
        loaderElem.classList.remove('loader-open');
        iziToast.warning({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      renderImages(data.hits);
      new SimpleLightbox('.images-list a', {
        captionsData: 'alt',
        captionDelay: 250,
      }).refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
      });
    });
});
