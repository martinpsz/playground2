/* eslint-disable node/no-extraneous-import */
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/form-elements/form-nav';

@customElement('unit-form')
export class UnitForm extends LitElement {
  @property() selection: Number;

  constructor() {
    super();

    this.selection;
  }

  render() {
    console.log(`The selection is ${this.selection}`);
    return html`<div @unitSelection=${this._selectionListener}>
      <form-nav></form-nav>
    </div>`;
  }

  _selectionListener(e: CustomEvent) {
    this.selection = e.detail.selection;
  }
}
