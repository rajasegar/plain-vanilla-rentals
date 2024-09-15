class App extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('app-template');
    this.appendChild(template.content.cloneNode(true));
  }
}

// class AppLayout extends HTMLElement {
  // connectedCallback() {
    // const template = document.getElementById('app-layout-template');
    // this.appendChild(template.content.cloneNode(true));
  // }
  
// }




export const registerApp = () => {
  customElements.define('x-app', App);
  // customElements.define('x-app-layout', AppLayout)
}
