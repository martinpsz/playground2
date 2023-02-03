import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('form-nav')
export class FormNav extends LitElement {
  render() {
    return html`<p>Hello from the header</p>`;
  }
}
