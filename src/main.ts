import './views/home'
import './views/about'
import './assets/styles/main.css'

class TheApp extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get component(): string {
    const path = location.pathname.toLowerCase()
    switch (path) {
      case '/':
        return 'home-page'
      case '/about':
        return 'about-page'
      default:
        return 'not-found-page'
    }
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot!.innerHTML = `<${this.component}></${this.component}>`
  }
}

customElements.define('the-app', TheApp)
