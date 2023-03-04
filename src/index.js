import { galleryItems } from './galery-items';
import { refs } from './js/refs';
import { renderGalleryMarkup } from './js/render-functions';
import { onCloseModalBtnClick, onGalleryItemClick } from './js/handlers';
import { onBackdropClick } from './js/handlers';


renderGalleryMarkup(galleryItems);
refs.gallery.addEventListener('click', onGalleryItemClick);
refs.closeModalButton.addEventListener('click', onCloseModalBtnClick);
refs.backdrop.addEventListener('click', onBackdropClick);

