import galleryItems from './app.js';
import refs from './refs';
const { galleryListEl } = refs;
import { creatImageCardsMarkup } from './functions';
galleryListEl.innerHTML = creatImageCardsMarkup(galleryItems);
