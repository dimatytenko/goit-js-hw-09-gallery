import galleryItems from './app.js';

import refs from './refs';
const { galleryListEl, buttonCloseImageEl, lightboxEl, lightboxImageEl } = refs;
let currentIndexImage = 0;

import {
  onOpenGalleryImageClick,
  onKeyPress,
  changeAtributesKeyPress,
  findCurrentIndexImage,
  showNextImage,
  showPreviousImage,
} from './functions';
