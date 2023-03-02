// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');
const galleryElements = galleryItems
  .map(
    (item) =>
      `<a href="${item.original}" class="gallery__item" data-subtitle="${item.description}">
        <img src="${item.preview}" alt="${item.description}" class="gallery__image" data-source="${item.original}">
      </a>`
  )
  .join('');

gallery.innerHTML = galleryElements;

const images = gallery.querySelectorAll('.gallery__image');
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.preventDefault();
    const source = image.closest('.gallery__item').href;
    const title = image.alt;
    const lightbox = new SimpleLightbox(`<img src="${source}" alt="${title}">`);
    lightbox.show();
  });
});

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250

});


console.log('lightbox');
console.log(galleryItems);