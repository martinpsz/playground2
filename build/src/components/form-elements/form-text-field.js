var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let FormTextField = class FormTextField extends LitElement {
    static styles = css `
    div {
      display: flex;
      flex-direction: column;
    }

    label {
      font-family: var(--copy-font);
      color: var(--black-500);
      margin-bottom: 0.5em;
    }

    input {
      border: none;
      border: 1px solid var(--black-300);
      border-radius: 4px;
      padding: 0.5em 0 0.5em 0.25em;
    }

    input:focus {
      outline: transparent;
    }

    input::placeholder {
      font-family: var(--copy-font);
      text-transform: uppercase;
    }
  `;
    label;
    placeholder;
    value;
    render() {
        return html `<div>
      <label for=${this.label}>${this.label}</label
      ><input
        type="text"
        id=${this.label}
        placeholder=${this.placeholder}
        value=${this.value}
      />
    </div>`;
    }
};
__decorate([
    property()
], FormTextField.prototype, "label", void 0);
__decorate([
    property()
], FormTextField.prototype, "placeholder", void 0);
__decorate([
    property()
], FormTextField.prototype, "value", void 0);
FormTextField = __decorate([
    customElement('form-text-field')
], FormTextField);
export { FormTextField };
//# sourceMappingURL=form-text-field.js.map