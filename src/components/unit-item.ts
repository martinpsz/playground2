/* eslint-disable node/no-extraneous-import */
import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

const editIcon = 'src/static/icons/edit.svg';

@customElement('unit-item')
export class UnitItem extends LitElement {
  static styles = css`
    #unit_id {
      background: var(--primary-500);
      padding: 0.25em 0 0.5em 1.25em;
      margin: 0.5em 0.25em 0.5em 0;
      border-radius: 4px;
      position: relative;
      display: grid;
      grid-template-columns: 80% 20%;
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
      text-transform: uppercase;
      font-size: 0.8em;
    }

    #unit_id h2 {
      grid-area: employer;
      font-family: var(--header-font);
      font-weight: 600;
      font-size: 1.33em;
      text-transform: uppercase;
      color: white;
      margin: 0.5em 0 0.25em;
      width: 95%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
  @property()
  agr_id: String;

  @property()
  stateLoc: String;

  @property()
  council: String | Number;

  @property()
  local: Number;

  @property()
  subunit: Number | String;

  @property()
  master: Boolean;

  @property()
  employer: String;

  @state()
  protected _selection: {};

  render() {
    return html` <div id="unit_id">
      <p>
        ${this.master ? html`<span id="master">Master</span>` : ''}
        <span>State: ${this.stateLoc}</span>
        ${this.council && html`<span>Council: ${this.council}</span>`}
        ${this.local && html`<span>Local: ${this.local}</span>`}
        ${this.subunit && html`<span>Chapter/Unit: ${this.subunit}</span>`}
      </p>
      <h2>${this.employer}</h2>
      <span id="unit_status">Complete</span>
      <button role="button" @click=${this._selectionHandler}>
        <img src=${editIcon} alt="edit icon" />Edit
      </button>
    </div>`;
  }

  _selectionHandler() {
    this._selection = this.agr_id;

    if (this._selection) {
      const options = {
        detail: this._selection,
        bubbles: true,
        composed: true,
      };

      this.dispatchEvent(new CustomEvent('onSelection', options));
    }
  }
}
