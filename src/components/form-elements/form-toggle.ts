import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('form-toggle')
export class FormToggle extends LitElement {
  static styles = css`
    .radio-question {
      display: flex;
      align-items: center;
      font-family: var(--copy-font);
    }

    .radio-question p {
      margin-right: 0.5em;
    }
  `;

  @property() labels: [String];
  @property() question: String;

  render() {
    return html`
      <div class="radio-question">
        <p>${this.question}</p>
        <div class="toggler">
          ${this.labels.map(
            label =>
              html`<label for=${label}>${label}</label
                ><input id=${label} type="radio" name="option" />`
          )}
        </div>
      </div>
    `;
  }
}
