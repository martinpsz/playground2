var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let FormCalendarField = class FormCalendarField extends LitElement {
    static styles = css `
    #container {
      display: flex;
      flex-direction: column;
      font-family: var(--copy-font);
      color: var(--black-500);
    }

    #container p {
      margin: 0 0 0.5em 0;
    }

    #date-range {
      display: flex;
      align-items: center;
    }

    #date-range #from-label,
    #date-range #to-label {
      margin-right: 0.25em;
    }

    #date-range #from {
      margin-right: 1em;
    }

    input {
      padding: 0.5em 0 0.5em 0.25em;
      border-radius: 4px;
      border: 1px solid var(--black-300);
    }
  `;
    prompt;
    dateRange;
    valueFrom;
    valueTo;
    render() {
        return html `<div id="container">
      <p>${this.prompt}</p>
      ${this.dateRange
            ? html `<div id="date-range">
            <label id="from-label" for="from">From:</label>
            <input type="date" id="from" value=${this.valueFrom} />
            <label id="to-label" for="to">To:</label>
            <input type="date" id="to" value=${this.valueTo} />
          </div>`
            : html `<input type="date" id="from" value=${this.valueFrom} />`}
    </div>`;
    }
};
__decorate([
    property()
], FormCalendarField.prototype, "prompt", void 0);
__decorate([
    property()
], FormCalendarField.prototype, "dateRange", void 0);
__decorate([
    property()
], FormCalendarField.prototype, "valueFrom", void 0);
__decorate([
    property()
], FormCalendarField.prototype, "valueTo", void 0);
FormCalendarField = __decorate([
    customElement('form-calendar-field')
], FormCalendarField);
export { FormCalendarField };
//# sourceMappingURL=form-calendar-field.js.map