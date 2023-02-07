import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('form-toggler')
export class FormToggler extends LitElement {
  static styles = css`
    .toggle-container {
      font-family: var(--copy-font);
      display: inline-flex;
      align-items: center;
    }

    .vertical {
      flex-direction: column;
    }

    .toggle-container p {
      margin-right: 0.5em;
    }

    .vertical p {
      margin-right: 0;
    }

    input[type='radio'] {
      height: 30px;
      padding: 0 0.5em;
      min-width: 60px;
      box-sizing: border-box;
      appearance: none;
      background: #ffffff;
      border: 1px solid var(--primary-500);
      margin: 0;
      font-family: var(--copy-font);
    }

    input[type='radio']:checked {
      background: var(--primary-500);
      color: #ffffff;
    }

    input[type='radio'] {
      position: relative;
    }

    input[type='radio']:nth-of-type(1) {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }

    input[type='radio']:nth-of-type(2) {
    }

    input[type='radio']:last-of-type {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }

  `;
  @property() prompt: String;
  @property() options: [];
  @property() orientation: String;
  render() {
    return html`<div class="toggle-container ${this.orientation}">
      <p>${this.prompt}</p>
      <div class="toggler">
        ${this.options.map(
          option => html`<input type="radio" value=${option} name="select" />`
        )}
      </div>
    </div>`;
  }
}
