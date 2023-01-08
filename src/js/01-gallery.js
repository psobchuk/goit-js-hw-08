// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = buildGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function buildGallery(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');

  return markup;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.on('show.simplelightbox');

console.log(galleryItems);
console.log(SimpleLightbox);
