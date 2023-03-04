import { closeModal, openModal } from "./modal";
import { refs } from "./refs";

export function onGalleryItemClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    openModal();
    /* e.target.dataset.source */
    refs.modalImage.src = e.target.dataset.source;
    refs.modalImage.alt = e.target.alt;
}
export function onCloseModalBtnClick(e) {
    closeModal();
}

export function onEscPress(e) {
    if (e.code !== 'Escape') {
        return;
    }
    closeModal();
}
export function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
        closeModal();
   }
}