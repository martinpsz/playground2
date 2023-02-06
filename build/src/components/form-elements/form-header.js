var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let FormHeader = class FormHeader extends LitElement {
    static styles = css `
    p {
      border-bottom: 8px solid var(--afscme);
      max-width: 98%;
      margin: 2em auto 1em;
      font-family: var(--copy-font);
      text-transform: uppercase;
      color: var(--primary-500);
    }
  `;
    sectionTitle;
    render() {
        return html `<p>${this.sectionTitle}</p>`;
    }
};
__decorate([
    property()
], FormHeader.prototype, "sectionTitle", void 0);
FormHeader = __decorate([
    customElement('form-header')
], FormHeader);
export { FormHeader };
//# sourceMappingURL=form-header.js.map