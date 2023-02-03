var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
const Logo = 'src/static/afscme.webp';
let HeaderElement = class HeaderElement extends LitElement {
    static styles = css `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 2em;
    }
    img {
      height: 80px;
    }

    h2 {
      font-family: var(--header-font);
      font-size: 1.33rem;
      font-weight: 600;
      margin: 0.2em 0;
    }

    p {
      margin: 0;
      text-transform: uppercase;
    }
  `;
    local = '';
    render() {
        return html `<img src=${Logo} alt="AFSCME Logo" height="100" />
      <h2>Minimum Dues Reporting</h2>
      <p>${this.local}</p>`;
    }
};
__decorate([
    property({ type: String })
], HeaderElement.prototype, "local", void 0);
HeaderElement = __decorate([
    customElement('header-element')
], HeaderElement);
export { HeaderElement };
//# sourceMappingURL=header-element.js.map