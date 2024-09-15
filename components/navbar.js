class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add your styles here */
      </style>
      <div>Navbar</div>
    `;
  }
}

export function registerNavbar() {
  customElements.define('nav-bar', Navbar);
}



