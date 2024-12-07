class AboutPage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot!.innerHTML = `<h1> About </h1>`
  }
}

customElements.define('about-page', AboutPage)
