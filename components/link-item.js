class LinkItem extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute('text') ?? '';
    const href = this.getAttribute('href') ?? '#';
    const external = this.hasAttribute('external');

    this.innerHTML = `
      <li class="w-full flex">
        <a class="dark:text-[#e0e0e0] hover:text-blue-500 dark:hover:text-blue-400 border-b border-black dark:border-[#e0e0e0] hover:border-blue-500 dark:hover:border-blue-400 flex flex-1 justify-center lg:justify-end" href="${href}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          <p class="my-3">${text}${external ? '<sup> ↗</sup>' : ''}</p>
        </a>
      </li>
    `;
  }
}

customElements.define('link-item', LinkItem);

