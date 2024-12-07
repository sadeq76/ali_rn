class HomePage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot!.innerHTML = `
    <h1> Should I use an accessibility overlay? </h1>
    <p>Due to their technical, social, and moral issues, The A11Y Project does not recommend using permanent overlay plugins. We view these kinds of products as actively harmful, and a step backwards for digital accessibility efforts.</p>
    `
  }
}

customElements.define('home-page', HomePage)
