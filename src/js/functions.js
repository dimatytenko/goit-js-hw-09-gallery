import galleryItems from './app.js';

import refs from './refs';
const { lightboxEl, lightboxImageEl, lightboxOverlay } = refs;

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

// ======================================

export function onOpenGalleryImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  onOpenGallery();
}

function onOpenGallery() {
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
  if (evt.target === lightboxOverlay) {
    onCloseGallery();
  }
}

// =================================

export function onKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseGallery();
  } else if (event.code === 'ArrowLeft') {
    showPreviousImage();
  } else if (event.code === 'ArrowRight') {
    showNextImage();
  }
}

export function showPreviousImage(array) {
  const sourceImg = galleryItems.map(({ original }) => original);
  let indexOfImg = sourceImg.indexOf(lightboxImageEl.src);

  if (indexOfImg + 1 > sourceImg.length - 1) {
    indexOfImg = -1;
  }
  lightboxImageEl.src = sourceImg[indexOfImg + 1];
}

export function showNextImage(array) {
  const sourceImg = galleryItems.map(({ original }) => original);
  let indexOfImg = sourceImg.indexOf(lightboxImageEl.src);

  if (indexOfImg === 0) {
    indexOfImg = sourceImg.length;
  }
  lightboxImageEl.src = sourceImg[indexOfImg - 1];
}
