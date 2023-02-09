import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('form-text-field')
export class FormTextField extends LitElement {
  static styles = css`
    div {
      display: flex;
      flex-direction: column;
    }

    label {
      font-family: var(--copy-font);
      color: var(--black-500);
      margin-bottom: 0.5em;
    }

    input {
      border: none;
      border: 1px solid var(--black-300);
      border-radius: 4px;
      padding: 0.5em 0 0.5em 0.25em;
    }

    input:focus {
      outline: transparent;
    }

    input::placeholder {
      font-family: var(--copy-font);
      text-transform: uppercase;
    }
  `;
  @property() label: string;
  @property() placeholder: string;
  @property() value: String | Number;

  render() {
    return html`<div>
      <label for=${this.label}>${this.label}</label
      ><input
        type="text"
        id=${this.label}
        placeholder=${this.placeholder}
        value=${this.value}
      />
    </div>`;
  }
}
