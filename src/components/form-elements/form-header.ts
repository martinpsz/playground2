import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('form-header')
export class FormHeader extends LitElement {
  static styles = css`
    p {
      border-bottom: 8px solid var(--afscme);
      max-width: 98%;
      margin: 2em auto 1em;
      font-family: var(--copy-font);
      text-transform: uppercase;
      color: var(--primary-500);
    }
  `;
  @property()
  sectionTitle: string;
  render() {
    return html`<p>${this.sectionTitle}</p>`;
  }
}
