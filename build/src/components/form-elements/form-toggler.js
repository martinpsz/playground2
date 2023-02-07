var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let FormToggler = class FormToggler extends LitElement {
    static styles = css `
    .toggle-container {
      font-family: var(--copy-font);
      display: inline-flex;
      align-items: center;
    }

    .vertical {
      flex-direction: column;
    }

    .toggle-container p {
      margin-right: 0.5em;
    }

    .vertical p {
      margin-right: 0;
    }

    input[type='radio'] {
      height: 30px;
      padding: 0 0.5em;
      min-width: 60px;
      box-sizing: border-box;
      appearance: none;
      background: #ffffff;
      border: 1px solid var(--primary-500);
      margin: 0;
      font-family: var(--copy-font);
    }

    input[type='radio']:checked {
      background: var(--primary-500);
      color: #ffffff;
    }

    input[type='radio'] {
      position: relative;
    }

    input[type='radio']:nth-of-type(1) {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }

    input[type='radio']:nth-of-type(2) {
    }

    input[type='radio']:last-of-type {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }

  `;
    prompt;
    options;
    orientation;
    render() {
        return html `<div class="toggle-container ${this.orientation}">
      <p>${this.prompt}</p>
      <div class="toggler">
        ${this.options.map(option => html `<input type="radio" value=${option} name="select" />`)}
      </div>
    </div>`;
    }
};
__decorate([
    property()
], FormToggler.prototype, "prompt", void 0);
__decorate([
    property()
], FormToggler.prototype, "options", void 0);
__decorate([
    property()
], FormToggler.prototype, "orientation", void 0);
FormToggler = __decorate([
    customElement('form-toggler')
], FormToggler);
export { FormToggler };
//# sourceMappingURL=form-toggler.js.map