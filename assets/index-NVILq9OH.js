(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=".site-header{background-color:#fff;border-bottom:1px solid #eee}.site-header .container{max-width:1100px;margin:0 auto;padding:16px;display:flex;justify-content:space-between;align-items:center}.site-header .nav a{margin-left:16px;text-decoration:none;color:#333;font-weight:500}.site-header .nav a:hover{color:#4f46e5}.logo{height:40px}",d=`<header class="site-header">\r
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
`,s=new CSSStyleSheet;s.replaceSync(c);class l extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;const r=this.attachShadow({mode:"open"});r.adoptedStyleSheets=[s],r.innerHTML=String(d)}}customElements.define("app-header",l);
