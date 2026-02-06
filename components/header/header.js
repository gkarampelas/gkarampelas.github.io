import cssContent from './header.css?inline';
import htmlContent from './header.html?raw';
import logoUrl from '/logo.svg';


const headerSheet = new CSSStyleSheet();
headerSheet.replaceSync(cssContent);

class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [headerSheet];
        this.shadowRoot.innerHTML = String(htmlContent).replace('/logo.svg', logoUrl);
    }
}
customElements.define('app-header', AppHeader);
