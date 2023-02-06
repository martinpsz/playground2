import { LitElement } from 'lit';
import '../components/header-element';
import '../components/unit-list';
import '../components/unit-form';
export declare const data: any;
export declare class MinimumDues extends LitElement {
    static styles: import("lit").CSSResult;
    selection: Number | undefined;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    _selectionListener(e: CustomEvent): void;
}
