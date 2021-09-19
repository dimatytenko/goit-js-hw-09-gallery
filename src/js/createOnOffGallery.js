import refs from './refs';
const { galleryListEl, lightboxEl, buttonCloseImageEl } = refs;
import { onOpenGalleryImageClick, onCloseGallery, onCloseGalleryLigthboxClick } from './functions';

galleryListEl.addEventListener('click', onOpenGalleryImageClick);
buttonCloseImageEl.addEventListener('click', onCloseGallery);
lightboxEl.addEventListener('click', onCloseGalleryLigthboxClick);
