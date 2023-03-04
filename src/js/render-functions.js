import { refs } from './refs';

function createGalleryMarkup(items) {
  return items
    .map(
      ({
        preview,
        original,
        description,
      }) => `<li class="gallery__item"><a href="${original}}"><img data-source="${original}" src="${preview}" alt="${description}"></a></li>
    `
    )
    .join('');
}

export function renderGalleryMarkup(items) {
  refs.gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(items));
}
