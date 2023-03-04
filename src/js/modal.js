import { refs } from "./refs";
import { onEscPress } from './handlers';

export function openModal() {
    refs.backdrop.classList.remove('is-hidden');
    document.addEventListener('keydown', onEscPress);
}

export function closeModal() {
    refs.backdrop.classList.add('is-hidden');
    document.removeEventListener('keydown', onEscPress);
}
