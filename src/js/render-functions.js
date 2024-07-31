const imgListElem = document.querySelector('.images-list');
const loaderElem = document.querySelector('.loader');

export default function renderImages(images) {
  const markup = images
    .map(image => {
      return `<li class="images-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"

          />
          <div class="property">
          <p><span class="weight">Likes</span> ${image.likes}</p>
          <p><span class="weight">Views</span> ${image.views}</p>
          <p><span class="weight">Comments</span> ${image.comments}</p>
          <p><span class="weight">Downloads</span> ${image.downloads}</p>
          </div>
        </a>
      </li>`;
    })
    .join('');

  loaderElem.classList.remove('loader-open');
  imgListElem.innerHTML = markup;
}
