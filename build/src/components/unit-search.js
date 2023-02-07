var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
const searchIcon = 'src/static/icons/search.svg';
const plusIcon = 'src/static/icons/plus.svg';
let UnitSearch = class UnitSearch extends LitElement {
    static styles = css `
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
      background: var(--primary-500);
      border: none;
      border-radius: 4px;
      font-family: var(--copy-font);
      text-transform: uppercase;
      color: #ffffff;
      padding: 0.5em 1em;
      display: flex;
      align-items: center;
    }

    button img {
      margin-right: 0.5em;
    }
  `;
    render() {
        return html `<div class="search-container">
      <div class="search-field">
        <input
          id="search"
          type="text"
          placeholder="Search by employer/unit:"
          @input=${this._inputListener}
        />
        <label for="search"><img src=${searchIcon} /></label>
      </div>
      <button><img src=${plusIcon} alt="plus icon" />Add a unit</button>
    </div>`;
    }
    _inputListener = (e) => {
        this.dispatchEvent(new CustomEvent('search-input', {
            bubbles: true,
            composed: true,
            detail: e.target.value,
        }));
    };
};
UnitSearch = __decorate([
    customElement('unit-search')
], UnitSearch);
export { UnitSearch };
//# sourceMappingURL=unit-search.js.map