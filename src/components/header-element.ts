/* eslint-disable node/no-extraneous-import */
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

const Logo = 'src/static/afscme.webp';

@customElement('header-element')
export class HeaderElement extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 2em;
    }
    img {
      height: 80px;
    }

    h2 {
      font-family: var(--header-font);
      font-size: 1.33rem;
      font-weight: 600;
      margin: 0.2em 0;
    }

    p {
      margin: 0;
      text-transform: uppercase;
    }
  `;

  @property({type: String})
  local = '';

  render() {
    return html`<img src=${Logo} alt="AFSCME Logo" height="100" />
      <h2>Minimum Dues Reporting</h2>
      <p>${this.local}</p>`;
  }
}
