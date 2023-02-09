/* eslint-disable node/no-extraneous-import */
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './unit-item';
import '../components/unit-search';

@customElement('unit-list')
export class UnitList extends LitElement {
  static styles = css`
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

  @property()
  payload: [];

  @property()
  searchTerm: '';


  updateSearchTerm(e: any) {
    this.searchTerm = e.detail.toLowerCase();
    this.requestUpdate();
  }

  render() {
    
    return html`<unit-search
        @search-input=${this.updateSearchTerm}
      ></unit-search>
      <div id="units">
        ${this.payload.map(
          val => html`<unit-item
            .agr_id="${val['agr_id']}"
            .stateLoc="${val['state']}"
            .council="${val['council']}"
            .local="${val['local']}"
            .subunit="${val['subunit']}"
            .master="${val['master']}"
            .employer="${val['master'] ? val['master_name'] : val['unit_name']}"
          ></unit-item>`
        )}
      </div>`;
  }

  
  
}
