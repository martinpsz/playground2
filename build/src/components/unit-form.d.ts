import { LitElement, TemplateResult } from 'lit';
import './form-elements/form-header';
import './form-elements/form-text-field';
import './form-elements/form-toggle';
import './form-elements/form-calendar-field';
import './form-elements/form-raises';
import './form-elements/form-toggler';
interface unionContact {
    email: String;
    name: String;
    phone: String;
}
interface unitSelection {
    affiliate_id: String;
    agr_id: Number;
    agreement_eff_date: String | null;
    agreement_exp_date: String | null;
    contact: unionContact | null;
    council: Number | null;
    local: Number | null;
    master: Boolean;
    master_name: String | null;
    number_of_members: Number | null;
    period_id: Number;
    state: String;
    subunit: String | null;
    unit_name: String;
    year: Number;
}
export declare class UnitForm extends LitElement {
    static styles: import("lit").CSSResult;
    raises: TemplateResult[];
    specialRaise: Boolean;
    specialRaises: TemplateResult[];
    unitSelected: unitSelection;
    childFoo: string;
    constructor();
    render(): TemplateResult<1>;
    _addRaise(): void;
    _addSpecialRaise(): void;
    _specialPaySelectionHandler(): void;
}
export {};
