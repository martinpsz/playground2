var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let FormToggle = class FormToggle extends LitElement {
    static styles = css `
    .radio-question {
      display: flex;
      align-items: center;
      font-family: var(--copy-font);
    }

    .radio-question p {
      margin-right: 0.5em;
    }
  `;
    labels;
    question;
    render() {
        return html `
      <div class="radio-question">
        <p>${this.question}</p>
        <div class="toggler">
          ${this.labels.map(label => html `<label for=${label}>${label}</label
                ><input id=${label} type="radio" name="option" />`)}
        </div>
      </div>
    `;
    }
};
__decorate([
    property()
], FormToggle.prototype, "labels", void 0);
__decorate([
    property()
], FormToggle.prototype, "question", void 0);
FormToggle = __decorate([
    customElement('form-toggle')
], FormToggle);
export { FormToggle };
//# sourceMappingURL=form-toggle.js.map