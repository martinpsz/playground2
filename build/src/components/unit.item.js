var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
const editIcon = 'src/static/icons/edit.svg';
let UnitItem = class UnitItem extends LitElement {
    static styles = css `
    #unit_id {
      background: var(--primary-500);
      padding: 0.25em 0 0.5em 1.25em;
      margin: 0.5em 0.25em 0.5em 0;
      border-radius: 4px;
      position: relative;
      display: grid;
      grid-template-columns: 85% 15%;
      grid-template-rows: auto;
      grid-template-areas:
        'unit status'
        'employer button';
      align-items: center;
    }

    #unit_id #master {
      margin-right: 0.5em;
      background: var(--afscme);
      padding: 0.25em 0.5em;
      border-radius: 4px;
    }

    #unit_id h2 {
      grid-area: employer;
      font-family: var(--header-font);
      font-weight: 600;
      font-size: 1.33em;
      text-transform: uppercase;
      color: white;
      margin: 0.5em 0 0.25em;
    }

    #unit_id p span {
      color: white;
      font-family: var(--copy-font);
      padding: 0 0.25em 0 0;
    }

    #unit_id p {
      margin: 0.5em 0;
      grid-area: unit;
    }

    #unit_id #unit_status {
      grid-area: status;
      color: white;
      text-transform: uppercase;
      text-align: center;
    }

    #unit_id button {
      grid-area: button;
      background: none;
      border: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.5em 0;
      margin: 0 0.5em;
      text-transform: uppercase;
      color: var(--primary-500);
      background: white;
      border: 1px solid var(--primary-500);
      border-radius: 4px;
      font-family: var(--copy-font);
      line-height: 1;
    }

    #unit_id button img {
      margin-right: 0.5em;
    }
  `;
    stateLoc;
    council;
    local;
    subunit;
    master;
    employer;
    constructor() {
        super();
        this.stateLoc;
        this.council;
        this.local;
        this.subunit;
        this.master;
        this.employer;
    }
    render() {
        return html ` <div id="unit_id">
      <p>
        ${this.master ? html `<span id="master">Master</span>` : ''}
        <span>State: ${this.stateLoc}</span>
        ${this.council && html `<span>Council: ${this.council}</span>`}
        ${this.local && html `<span>Local: ${this.local}</span>`}
        ${this.subunit && html `<span>Chapter/Unit: ${this.subunit}</span>`}
      </p>
      <h2>${this.employer}</h2>
      <span id="unit_status">Complete</span>
      <button role="button"><img src=${editIcon} alt="edit icon" />Edit</button>
    </div>`;
    }
};
__decorate([
    property()
], UnitItem.prototype, "stateLoc", void 0);
__decorate([
    property()
], UnitItem.prototype, "council", void 0);
__decorate([
    property()
], UnitItem.prototype, "local", void 0);
__decorate([
    property()
], UnitItem.prototype, "subunit", void 0);
__decorate([
    property()
], UnitItem.prototype, "master", void 0);
__decorate([
    property()
], UnitItem.prototype, "employer", void 0);
UnitItem = __decorate([
    customElement('unit-item')
], UnitItem);
export { UnitItem };
//# sourceMappingURL=unit.item.js.map