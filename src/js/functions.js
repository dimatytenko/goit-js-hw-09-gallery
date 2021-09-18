import refs from './refs';
// const { lightboxEl, lightboxImageEl } = refs;

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

// export function onOpenGalleryImageClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   window.addEventListener('keydown', onKeyPress);

//   lightboxEl.classList.add('is-open');
//   lightboxImageEl.src = event.target.dataset.source;
//   lightboxImageEl.alt = event.target.alt;

//   currentIndexImage = findCurrentIndexImage();
// }

// export function onCloseGallery() {
//   window.removeEventListener('keydown', onKeyPress);

//   lightboxEl.classList.remove('is-open');

//   lightboxImageEl.removeAttribute('src');
//   lightboxImageEl.removeAttribute('alt');
// }

// export function onCloseGalleryLigthboxClick(evt) {
//   if (evt.target.nodeName === 'IMG') {
//     return;
//   }
//   onCloseGallery();
// }

// export function onKeyPress(event) {
//   console.log(event);
//   if (event.code === 'Escape') {
//     onCloseGallery();
//   } else if (event.code === 'ArrowLeft') {
//     showPreviousImage(galleryItems, currentIndexImage);
//   } else if (event.code === 'ArrowRight') {
//     showNextImage(galleryItems, currentIndexImage);
//   }
// }

// export function changeAtributesKeyPress(index) {
//   lightboxImageEl.src = galleryItems[index].original;
//   lightboxImageEl.alt = galleryItems[index].description;
// }

// export function findCurrentIndexImage() {
//   let currentIndex;
//   galleryItems.find((item, index) => {
//     if (item.original === lightboxImageEl.getAttribute('src')) {
//       currentIndex = index;
//     }
//   });
//   return currentIndex;
// }

// export function showNextImage(array, index) {
//   index >= array.length - 1 ? (index = 0) : (index += 1);
//   changeAtributesKeyPress(index);
//   currentIndexImage = index;
// }

// export function showPreviousImage(array, index) {
//   index === 0 ? (index = array.length - 1) : (index -= 1);
//   changeAtributesKeyPress(index);
//   currentIndexImage = index;
// }
