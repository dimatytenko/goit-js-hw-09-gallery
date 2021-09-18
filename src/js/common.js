import galleryItems from './app.js';

const galleryListEl = document.querySelector('ul.js-gallery');
const lightboxEl = document.querySelector('div.js-lightbox');
const lightboxImageEl = document.querySelector('img.lightbox__image');
const buttonCloseImageEl = document.querySelector('button[data-action="close-lightbox"]');
let currentIndexImage = 0;

galleryListEl.addEventListener('click', onOpenGalleryImageClick);
buttonCloseImageEl.addEventListener('click', onCloseGallery);
lightboxEl.addEventListener('click', onCloseGalleryLigthboxClick);

// function creatImageCardsMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//     <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${original}"
//   >
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>
//   `;
//     })
//     .join('');
// }

function onOpenGalleryImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  window.addEventListener('keydown', onKeyPress);

  lightboxEl.classList.add('is-open');
  lightboxImageEl.src = event.target.dataset.source;
  lightboxImageEl.alt = event.target.alt;

  currentIndexImage = findCurrentIndexImage();
}

function onCloseGallery() {
  window.removeEventListener('keydown', onKeyPress);

  lightboxEl.classList.remove('is-open');

  lightboxImageEl.removeAttribute('src');
  lightboxImageEl.removeAttribute('alt');
}

function onCloseGalleryLigthboxClick(evt) {
  if (evt.target.nodeName === 'IMG') {
    return;
  }
  onCloseGallery();
}

function onKeyPress(event) {
  console.log(event);
  if (event.code === 'Escape') {
    onCloseGallery();
  } else if (event.code === 'ArrowLeft') {
    showPreviousImage(galleryItems, currentIndexImage);
  } else if (event.code === 'ArrowRight') {
    showNextImage(galleryItems, currentIndexImage);
  }
}

function changeAtributesKeyPress(index) {
  lightboxImageEl.src = galleryItems[index].original;
  lightboxImageEl.alt = galleryItems[index].description;
}

function findCurrentIndexImage() {
  let currentIndex;
  galleryItems.find((item, index) => {
    if (item.original === lightboxImageEl.getAttribute('src')) {
      currentIndex = index;
    }
  });
  return currentIndex;
}

function showNextImage(array, index) {
  index >= array.length - 1 ? (index = 0) : (index += 1);
  changeAtributesKeyPress(index);
  currentIndexImage = index;
}

function showPreviousImage(array, index) {
  index === 0 ? (index = array.length - 1) : (index -= 1);
  changeAtributesKeyPress(index);
  currentIndexImage = index;
}
