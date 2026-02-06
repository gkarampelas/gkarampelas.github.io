class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="site-header">
        <div class="container">
          <img src="../assets/images/logo.svg" alt="Logo" class="logo">

          <nav class="nav">
            <a href="/home">Home</a>
            <a href="/about">Menu</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
    `;
    }
}

customElements.define('app-header', AppHeader);
