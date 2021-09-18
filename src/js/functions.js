import refs from './refs';
const { lightboxEl, lightboxImageEl } = refs;

export function creatImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `;
    })
    .join('');
}

// =============

export function onOpenGalleryImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  onOpenGallery();
}

export function onOpenGallery() {
  window.addEventListener('keydown', onKeyPress);
  lightboxEl.classList.add('is-open');
  lightboxImageEl.src = event.target.dataset.source;
  lightboxImageEl.alt = event.target.alt;
}

export function onCloseGallery() {
  window.removeEventListener('keydown', onKeyPress);
  lightboxEl.classList.remove('is-open');
  lightboxImageEl.removeAttribute('src');
  lightboxImageEl.removeAttribute('alt');
}

export function onCloseGalleryLigthboxClick(evt) {
  if (evt.target.nodeName === 'IMG') {
    return;
  }
  onCloseGallery();
}

export function onKeyPress(event) {
  console.log(event);
  if (event.code === 'Escape') {
    onCloseGallery();
  } else if (event.code === 'ArrowLeft') {
    showPreviousImage(galleryItems, currentIndexImage);
  } else if (event.code === 'ArrowRight') {
    showNextImage(galleryItems, currentIndexImage);
  }
}
