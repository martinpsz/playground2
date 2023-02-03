var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
const searchIcon = 'src/static/icons/search.svg';
let UnitSearch = class UnitSearch extends LitElement {
    static styles = css `
    .search-container {
      padding: 0.75em 0;
      background: var(--afscme);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .search-field {
      display: inline-flex;
      align-items: center;
      position: relative;
      width: 33%;
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
  `;
    render() {
        return html `<div class="search-container">
      <div class="search-field">
        <input id="search" type="text" placeholder="Search by employer/unit:" />
        <label for="search"><img src=${searchIcon} /></label>
      </div>
    </div>`;
    }
};
UnitSearch = __decorate([
    customElement('unit-search')
], UnitSearch);
export { UnitSearch };
//# sourceMappingURL=unit-search.js.map