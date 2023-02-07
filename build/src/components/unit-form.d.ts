import { LitElement, TemplateResult } from 'lit';
import './form-elements/form-header';
import './form-elements/form-text-field';
import './form-elements/form-toggle';
import './form-elements/form-calendar-field';
import './form-elements/form-raises';
import './form-elements/form-toggler';
export declare class UnitForm extends LitElement {
    static styles: import("lit").CSSResult;
    raises: TemplateResult[];
    specialRaise: Boolean;
    specialRaises: TemplateResult[];
    constructor();
    render(): TemplateResult<1>;
    _addRaise(): void;
    _addSpecialRaise(): void;
    _specialPaySelectionHandler(): void;
}
