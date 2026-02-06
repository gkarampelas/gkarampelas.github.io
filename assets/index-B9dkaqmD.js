(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=".site-header{background-color:#fff;border-bottom:1px solid #eee}.site-header .container{max-width:1100px;margin:0 auto;padding:16px;display:flex;justify-content:space-between;align-items:center}.site-header .nav a{margin-left:16px;text-decoration:none;color:#333;font-weight:500}.site-header .nav a:hover{color:#4f46e5}.logo{height:40px}",l=`<header class="site-header">\r
  <div class="container">\r
    <img src="/assets/images/logo.svg" alt="Logo" class="logo">\r
\r
    <nav class="nav">\r
      <a href="/home">Home</a>\r
      <a href="/about">Menu</a>\r
      <a href="/contact">Contact</a>\r
    </nav>\r
  </div>\r
</header>\r
\r
\r
`,a=new CSSStyleSheet;a.replaceSync(d);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[a],this.shadowRoot.innerHTML=String(l)}}customElements.define("app-header",h);const f=".card{display:flex;flex-direction:column;gap:4px}",p=`<div class="card">\r
    <div class="card-header">\r
        <slot name="title"></slot>\r
    </div>\r
    <div>\r
        <slot name="subtitle"></slot>\r
    </div>\r
    <div class="card-body">\r
        <slot name="body"></slot>\r
    </div>\r
    <div class="card-footer">\r
        <slot name="footer"></slot>\r
    </div>\r
</div>\r
`,i=new CSSStyleSheet;i.replaceSync(f);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[i],this.shadowRoot.innerHTML=String(p)}}customElements.define("app-card",u);
