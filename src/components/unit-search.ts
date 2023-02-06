import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

const searchIcon = 'src/static/icons/search.svg';

@customElement('unit-search')
export class UnitSearch extends LitElement {
  static styles = css`
    .search-container {
      padding: 0.75em 1em;
      background: var(--afscme);
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .search-field {
      display: inline-flex;
      align-items: center;
      position: relative;
      width: 50%;
    }

    input {
      border: none;
      padding: 0.5em;
      width: 100%;
      border-radius: 4px;
    }

    label {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 0 0.25em;
    }

    input::placeholder {
      color: var(--black-300);
      opacity: 100%;
      font-family: var(--copy-font);
    }

    input:focus {
      outline: transparent;
    }

    input:focus::placeholder {
      display: none;
    }

    button {
      background: white;
      border: 1px solid var(--primary-500);
      border-radius: 4px;
      font-family: var(--copy-font);
      text-transform: uppercase;
      color: var(--primary-500);
      padding: 0.5em 1em;
    }
  `;

  render() {
    return html`<div class="search-container">
      <div class="search-field">
        <input id="search" type="text" placeholder="Search by employer/unit:" />
        <label for="search"><img src=${searchIcon} /></label>
      </div>
      <button>Add a unit</button>
    </div>`;
  }
}
