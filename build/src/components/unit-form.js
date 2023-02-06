var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './form-elements/form-header';
import './form-elements/form-text-field';
import './form-elements/form-toggle';
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
  `;
    render() {
        return html `
      <form-header .sectionTitle=${'Reporting for the unit'}></form-header>
      <div id="reporting-for-unit" class="form-fields">
        <form-text-field
          .label=${'Name:'}
          .placeholder=${'Enter your full name'}
        ></form-text-field>
        <form-text-field
          .label=${'Phone Number:'}
          .placeholder=${'Enter your phone #:'}
        ></form-text-field>
        <form-text-field
          .label=${'Email Address:'}
          .placeholder=${'Enter your email:'}
        ></form-text-field>
      </div>
      <form-header .sectionTitle=${'Unit Corrections'}></form-header>
      <div id="unit-corrections" class="form-fields">
        <form-text-field .label=${'Employer/Unit:'}></form-text-field>
        <form-text-field .label=${'Local #:'}></form-text-field>
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
        <form-text-field .label=${'Number of members:'}></form-text-field>
      </div>
    `;
    }
};
UnitForm = __decorate([
    customElement('unit-form')
], UnitForm);
export { UnitForm };
//# sourceMappingURL=unit-form.js.map