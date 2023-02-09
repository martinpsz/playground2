var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/header-element';
import '../components/unit-list';
import '../components/unit-form';
const FetchData = async () => {
    const resp = await fetch('../../test-data.json');
    return resp.json();
};
export const data = await FetchData();
let MinimumDues = class MinimumDues extends LitElement {
    static styles = css `
    :host {
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        '. header'
        'main main'
        'footer footer';
    }

    :host small {
      text-transform: uppercase;
      color: var(--black-500);
    }

    :host small,
    :host p,
    :host a,
    :host button,
    :host span {
      font-family: var(--copy-font);
    }

    header {
      grid-area: header;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 0.5em 0;
    }

    main {
      grid-area: main;
      display: flex;
      justify-content: space-evenly;
    }

    main section {
      width: 100%;
      max-height: 80vh;
      margin: 0 0.5em;
    }

    main section:nth-of-type(2) {
      border: 1px solid var(--afscme);
      border-radius: 4px;
      background: white;
      overflow-y: scroll;
      padding: 1em 0 3em;
      max-height: calc(80vh - 4em);
    }

    main section:nth-of-type(2)::-webkit-scrollbar {
      width: 0.5em;
      border-radius: 8px;
    }

    main section:nth-of-type(2)::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 4px 4px var(--primary-500);
      border: solid 2px transparent;
      border-radius: 8px;
    }

    footer {
      grid-area: footer;
      text-align: center;
      margin-top: 2em;
    }

    footer small a {
      color: var(--primary-500);
    }
  `;
    selected;
    selectedUnit;
    parentFoo;
    _selectionListener(e) {
        this.selected = e.detail;
        this.selectedUnit = data.filter((val) => val.agr_id === this.selected)[0];
        this.requestUpdate();
        console.log(`Selection event: ${JSON.stringify(this.selectedUnit)}`);
    }
    constructor() {
        super();
        this.selectedUnit = data[0];
    }
    render() {
        return html `<header><header-element></header-element></header>
      <main>
        <section id="unit-list">
          <unit-list
            .payload=${data}
            @unit-selection=${this._selectionListener}
          ></unit-list>
        </section>
        <section id="form-area">
          <unit-form .unitSelected=${this.selectedUnit} .childFoo=${this.parentFoo}></unit-form>
        </section>
      </main>
      <footer>
        <small
          >For assistance with this form:
          <a href="mailto: minimumdues@afscme.org">minimumdues@afscme.org</a>
          / 202-429-1219
        </small>
      </footer>`;
    }
};
__decorate([
    property({ attribute: false })
], MinimumDues.prototype, "selected", void 0);
__decorate([
    property({ attribute: false })
], MinimumDues.prototype, "selectedUnit", void 0);
__decorate([
    property({ type: String })
], MinimumDues.prototype, "parentFoo", void 0);
MinimumDues = __decorate([
    customElement('minimum-dues')
], MinimumDues);
export { MinimumDues };
//# sourceMappingURL=minimum-dues.js.map