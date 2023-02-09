import { LitElement } from 'lit';
import '../components/header-element';
import '../components/unit-list';
import '../components/unit-form';
export declare const data: any;
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
export declare class MinimumDues extends LitElement {
    static styles: import("lit").CSSResult;
    selected: Number;
    selectedUnit: unitSelection;
    parentFoo: string;
    _selectionListener(e: CustomEvent): void;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
export {};
