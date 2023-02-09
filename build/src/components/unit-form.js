var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './form-elements/form-header';
import './form-elements/form-text-field';
import './form-elements/form-toggle';
import './form-elements/form-calendar-field';
import './form-elements/form-raises';
import './form-elements/form-toggler';
const plusIcon = 'src/static/icons/plus.svg';
let UnitForm = class UnitForm extends LitElement {
    static styles = css `
    .form-fields {
      padding: 0 1em;
    }

    #reporting-for-unit {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1em;
    }

    #unit-corrections {
      display: grid;
      grid-template-columns: auto 15%;
      grid-gap: 1em;
    }

    .btn {
      background: var(--primary-500);
      color: #ffffff;
      font-family: var(--copy-font);
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      border: none;
      border-radius: 4px;
      padding: 0.5em 1em;
    }

    .btn img {
      margin-right: 0.5em;
    }

    #upload {
      display: flex;
      flex-direction: column;
      font-family: var(--copy-font);
    }

    #upload span {
      margin-bottom: 0.5em;
    }

    #file-upload {
      font-family: var(--copy-font);
      display: flex;
    }

    #file-upload::file-selector-button {
      background: var(--primary-500);
      color: #ffffff;
      font-family: var(--copy-font);
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      border: none;
      border-radius: 4px;
      padding: 0.5em 1em;
    }

    #unit-status-area {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin: 0.5em 0;
      gap: 1em;
    }
  `;
    raises;
    specialRaise;
    specialRaises;
    unitSelected;
    childFoo;
    constructor() {
        super();
        this.raises = [];
        this.specialRaises = [];
    }
    render() {
        return html `
      <div id="unit-corrections" class="form-fields">
        <form-text-field
          .label=${'Employer/Unit:'}
          .value=${this.unitSelected['master']
            ? this.unitSelected['master_name']
            : this.unitSelected['unit_name']}
        ></form-text-field>
        <form-text-field
          .label=${'Local #:'}
          .value=${this.unitSelected['local'] ? this.unitSelected['local'] : ''}
        ></form-text-field>
      </div>
      <form-header .sectionTitle=${'Reporting for the unit'}></form-header>
      <div id="reporting-for-unit" class="form-fields">
        <form-text-field
          .label=${'Name:'}
          .placeholder=${'Enter your full name'}
          .value=${this.unitSelected['contact']
            ? this.unitSelected['contact']['name']
            : ''}
        ></form-text-field>
        <form-text-field
          .label=${'Phone Number:'}
          .placeholder=${'Enter your phone #:'}
          .value=${this.unitSelected['contact']
            ? this.unitSelected['contact']['phone']
            : ''}
        ></form-text-field>
        <form-text-field
          .label=${'Email Address:'}
          .placeholder=${'Enter your email:'}
          .value=${this.unitSelected['contact']
            ? this.unitSelected['contact']['email']
            : ''}
        ></form-text-field>
      </div>
      <form-header .sectionTitle=${'Unit Status'}></form-header>
      <div id="unit-status" class="form-fields">
        <form-toggle
          .question=${'Is the unit active:'}
          .labels=${['Yes', 'No']}
        ></form-toggle>
        <form-toggle
          .question=${'Was the unit in bargaining in the period 8/1/22 - 7/31/23:'}
          .labels=${['Yes', 'No']}
        ></form-toggle>
        <div id="unit-status-area">
          <form-text-field
            .label=${'Number of members:'}
            .value=${this.unitSelected['number_of_members']
            ? this.unitSelected['number_of_members']
            : ''}
          ></form-text-field>
          <form-calendar-field
            .prompt=${'Contract effective dates:'}
            .dateRange=${true}
            .valueFrom=${this.unitSelected['agreement_eff_date'] &&
            this.unitSelected['agreement_eff_date']}
            .valueTo=${this.unitSelected['agreement_exp_date'] &&
            this.unitSelected['agreement_exp_date']}
          ></form-calendar-field>
          <label for="file-upload" id="upload">
            <span>Upload Contract:</span>
            <input type="file" id="file-upload" />
          </label>
        </div>
      </div>
      <form-header .sectionTitle=${'Across the board raises'}></form-header>
      <div class="form-fields">
        <form-raises .specialRaise=${false}></form-raises>
        ${this.raises.map(raise => raise)}
        <button class="btn btn-raise" @click=${this._addRaise}>
          <img src=${plusIcon} />Add a raise
        </button>
      </div>
      <form-header
        .sectionTitle=${'Special Raises'}
        id="special-raises"
      ></form-header>
      <div class="form-fields">
        <form-toggle
          id="special-raise"
          .position=${'vertical'}
          .idTag=${'special'}
          .question=${'Did any group in this unit receive pandemic pay, retention bonuses, market adjustments or other special pay between 8/1/2022 - 7/31/2023?:'}
          .labels=${['Yes', 'No']}
          @click=${this._specialPaySelectionHandler}
        ></form-toggle>
      </div>
      ${this.specialRaise
            ? html `<div class="form-fields">
            <form-raises .specialRaise=${true}></form-raises>
            ${this.specialRaises.map(raise => raise)}
            <button class="btn btn-raise" @click=${this._addSpecialRaise}>
              <img src=${plusIcon} />Add a raise
            </button>
          </div>`
            : nothing}
    `;
    }
    _addRaise() {
        this.raises.push(html `<form-raises .specialRaise=${false}></form-raises>`);
        this.requestUpdate();
    }
    _addSpecialRaise() {
        this.specialRaises.push(html `<form-raises .specialRaise=${true}></form-raises>`);
        this.requestUpdate();
    }
    _specialPaySelectionHandler() {
        const selectedOption = this.renderRoot
            .querySelector('#special-raise')
            ?.shadowRoot?.querySelector('.toggler input[name="option"]:checked');
        const specialRaise = selectedOption?.getAttribute('value')?.toLowerCase() === 'yes'
            ? true
            : false;
        this.specialRaise = specialRaise;
        this.requestUpdate();
    }
};
__decorate([
    property()
], UnitForm.prototype, "raises", void 0);
__decorate([
    property()
], UnitForm.prototype, "specialRaise", void 0);
__decorate([
    property()
], UnitForm.prototype, "specialRaises", void 0);
__decorate([
    property({ attribute: false })
], UnitForm.prototype, "unitSelected", void 0);
__decorate([
    property()
], UnitForm.prototype, "childFoo", void 0);
UnitForm = __decorate([
    customElement('unit-form')
], UnitForm);
export { UnitForm };
//# sourceMappingURL=unit-form.js.map