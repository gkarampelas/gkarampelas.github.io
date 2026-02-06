import cssContent from './card.css?inline';
import htmlContent from './card.html?raw';

const cardSheet = new CSSStyleSheet();
cardSheet.replaceSync(cssContent);

class AppCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [cardSheet];
        this.shadowRoot.innerHTML = String(htmlContent);
    }
}


customElements.define('app-card', AppCard);
