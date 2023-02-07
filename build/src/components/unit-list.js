var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './unit-item';
import '../components/unit-search';
let UnitList = class UnitList extends LitElement {
    static styles = css `
    #units {
      overflow-y: scroll;
      max-height: calc(100% - (24px + 2em));
    }

    #units::-webkit-scrollbar {
      width: 0.5em;
      border-radius: 8px;
    }

    #units::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 4px 4px #0fac4f;
      border: solid 2px transparent;
      border-radius: 8px;
    }
  `;
    payload;
    searchTerm;
    editing;
    updateSearchTerm(e) {
        this.searchTerm = e.detail.toLowerCase();
        this.requestUpdate();
    }
    render() {
        return html `<unit-search
        @search-input=${this.updateSearchTerm}
      ></unit-search>
      <div id="units">
        ${this.payload.map(val => html `<unit-item
            .agr_id="${val['agr_id']}"
            .stateLoc="${val['state']}"
            .council="${val['council']}"
            .local="${val['local']}"
            .subunit="${val['subunit']}"
            .master="${val['master']}"
            .employer="${val['master'] ? val['master_name'] : val['unit_name']}"
          ></unit-item>`)}
      </div>`;
    }
};
__decorate([
    property()
], UnitList.prototype, "payload", void 0);
__decorate([
    property()
], UnitList.prototype, "searchTerm", void 0);
__decorate([
    property()
], UnitList.prototype, "editing", void 0);
UnitList = __decorate([
    customElement('unit-list')
], UnitList);
export { UnitList };
//# sourceMappingURL=unit-list.js.map