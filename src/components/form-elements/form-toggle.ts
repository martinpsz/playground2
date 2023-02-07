import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('form-toggle')
export class FormToggle extends LitElement {
  static styles = css`
    .radio-question {
      font-family: var(--copy-font);
      margin: 0;
    }

    .radio-question p {
      margin: 0.5em 0.5em 1em 0;
    }

    .toggler {
      margin: 0.5em 0.5em 1em 0;
    }

    .toggler label {
      margin-right: 0.5em;
    }

    .horizontal {
      display: flex;
    }

    .vertical {
      flex-direction: column;
    }

    .vertical p {
      margin: 0 0 1em 0;
    }

    .vertical .toggler {
      margin: 0;
    }

    #special {
      clear: right;
      padding-top: 1em;
    }
  `;

  @property() labels: [String];
  @property() question: String;
  @property() position = 'horizontal';
  @property() idTag = String;

  render() {
    return html`
      <div class="radio-question ${this.position}" id=${this.idTag}>
        <p>${this.question}</p>
        <div class="toggler">
          ${this.labels.map(
            label =>
              html`<input
                  id=${label}
                  type="radio"
                  name="option"
                  value=${label}
                /><label for=${label}>${label}</label>`
          )}
        </div>
      </div>
    `;
  }
}
