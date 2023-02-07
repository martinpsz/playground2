var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../form-elements/form-calendar-field';
import '../form-elements/form-text-field';
import '../form-elements/form-toggle';
const timesIcon = 'src/static/icons/x.svg';
let FormRaises = class FormRaises extends LitElement {
    static styles = css `
    #raise {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 5%;
      grid-template-rows: auto;
      grid-template-areas:
        'date type amount icon'
        'affected titles titles .';
      grid-column-gap: 1.5em;
      grid-row-gap: 1em;
      margin: 1em 0;
      justify-content: space-between;
      padding: 0.25em;
    }

    #date {
      grid-area: date;
    }

    #type {
      grid-area: type;
    }

    #amount {
      grid-area: amount;
    }

    #icon {
      grid-area: icon;
      align-self: start;
      justify-self: end;
    }

    #affected {
      grid-area: affected;
    }

    #titles {
      grid-area: titles;
    }

    hr {
      width: 80%;
      height: 1px;
      background: var(--black-100);
      border: none;
    }
  `;
    specialRaise;
    render() {
        return html `<div id="raise">
      <form-calendar-field
        id="date"
        .prompt=${'Effective date:'}
        .dateRange=${false}
      ></form-calendar-field>
      <form-toggle
        id="type"
        .question=${'Type of raise:'}
        .labels=${['%', 'Annual', 'Hourly']}
        .position=${'vertical'}
      ></form-toggle>
      <form-text-field
        id="amount"
        .label=${'Amount of raise:'}
      ></form-text-field>
      <img src=${timesIcon} id="icon" @click=${this._deleteRaise} />
      ${this.specialRaise
            ? html `<form-text-field
              id="affected"
              .label=${'Amount of workers affected:'}
            ></form-text-field
            ><form-text-field
              id="titles"
              .label=${'Titles receiving raise:'}
            ></form-text-field>`
            : ''}
    </div>`;
    }
    _deleteRaise() {
        this.renderRoot.querySelector('#raise')?.remove();
    }
};
__decorate([
    property()
], FormRaises.prototype, "specialRaise", void 0);
FormRaises = __decorate([
    customElement('form-raises')
], FormRaises);
export { FormRaises };
//# sourceMappingURL=form-raises.js.map