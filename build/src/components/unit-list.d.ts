import { LitElement } from 'lit';
import './unit-item';
import '../components/unit-search';
export declare class UnitList extends LitElement {
    static styles: import("lit").CSSResult;
    payload: [];
    searchTerm: '';
    editing: {};
    updateSearchTerm(e: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
