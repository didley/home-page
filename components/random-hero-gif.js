const heroImageFileNames = [
    'anime-at-desk',
    'anime-beach-night',
    'anime-beach-sunset',
    'anime-bike-bag',
    'anime-bike',
    'anime-night-woman',
    'anime-play-music'
  ];


class RandomHeroGif extends HTMLElement {
  connectedCallback() {
    const makePath = (fileName) => `assets/hero-gifs/${fileName}.gif`

    const randomImage = makePath(heroImageFileNames[Math.floor(Math.random() * heroImageFileNames.length)]);
    const _class = this.getAttribute('class')

    this.innerHTML = `<img src="${randomImage}" class="${_class}" />`;
  }
}

customElements.define('random-hero-gif', RandomHeroGif);

