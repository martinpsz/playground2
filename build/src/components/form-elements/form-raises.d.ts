import { LitElement } from 'lit';
import '../form-elements/form-calendar-field';
import '../form-elements/form-text-field';
import '../form-elements/form-toggle';
export declare class FormRaises extends LitElement {
    static styles: import("lit").CSSResult;
    specialRaise: Boolean;
    render(): import("lit-html").TemplateResult<1>;
    _deleteRaise(): void;
}
