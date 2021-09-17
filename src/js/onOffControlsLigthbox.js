import galleryItems from './app.js';

import refs from './refs';
const { galleryListEl, lightboxEl, lightboxImageEl, buttonCloseImageEl } = refs;
import { onOpenGalleryImageClick, onCloseGallery, onCloseGalleryLigthboxClick } from './functions';

galleryListEl.addEventListener('click', onOpenGalleryImageClick);
buttonCloseImageEl.addEventListener('click', onCloseGallery);
lightboxEl.addEventListener('click', onCloseGalleryLigthboxClick);
