import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('form-calendar-field')
export class FormCalendarField extends LitElement {
  static styles = css`
    #container {
      display: flex;
      flex-direction: column;
      font-family: var(--copy-font);
      color: var(--black-500);
    }

    #container p {
      margin: 0 0 0.5em 0;
    }

    #date-range {
      display: flex;
      align-items: center;
    }

    #date-range #from-label,
    #date-range #to-label {
      margin-right: 0.25em;
    }

    #date-range #from {
      margin-right: 1em;
    }

    input {
      padding: 0.5em 0 0.5em 0.25em;
      border-radius: 4px;
      border: 1px solid var(--black-300);
    }
  `;
  @property() prompt: String;
  @property() dateRange: Boolean;
  render() {
    return html`<div id="container">
      <p>${this.prompt}</p>
      ${this.dateRange
        ? html`<div id="date-range">
            <label id="from-label" for="from">From:</label>
            <input type="date" id="from" />
            <label id="to-label" for="to">To:</label>
            <input type="date" id="to" />
          </div>`
        : html`<input type="date" id="from" />`}
    </div>`;
  }
}
