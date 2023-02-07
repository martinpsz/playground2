/* eslint-disable node/no-extraneous-import */
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/header-element';
import '../components/unit-list';
import '../components/unit-form';

//Code for testing only:
const FetchData = async () => {
  const resp = await fetch('../../test-data.json');
  return resp.json();
};

export const data = await FetchData();
//

@customElement('minimum-dues')
export class MinimumDues extends LitElement {
  static styles = css`
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
      //border: 1px solid var(--afscme);
      border-radius: 4px;
      //background: white;
      overflow-y: scroll;
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

  @property({attribute: false})
  selection: Number | undefined;

  constructor() {
    super();
    this.selection = undefined;
  }

  render() {
    return html`<header><header-element></header-element></header>
      <main @onSelection=${this._selectionListener}>
        <section id="unit-list">
          <unit-list .payload=${data}></unit-list>
        </section>
        <section id="form-area">
          <unit-form></unit-form>
        </section>
      </main>
      <footer>
        <small
          >For assistance with this form:
          <a href="mailto: minimumdues@afscme.org">minimumdues@afscme.org</a>
          / 202-429-1219
        </small>
        <p>${this.selection}</p>
      </footer>`;
  }

  _selectionListener(e: CustomEvent) {
    this.selection = e.detail;
    this.requestUpdate();
  }
}
