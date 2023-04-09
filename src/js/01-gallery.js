// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

//add markup
const list = document.querySelector('.gallery');
(function () {
  const markup = galleryItems
    .map(
      ({ id, preview, original, description }) =>
        `<li class="gallery__item" data-id="${id}" style="list-style-type: none">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
})();

import SimpleLightbox from 'simplelightbox';

const galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
