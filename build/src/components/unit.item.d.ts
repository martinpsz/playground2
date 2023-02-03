import { LitElement } from 'lit';
export declare class UnitItem extends LitElement {
    static styles: import("lit").CSSResult;
    stateLoc: String;
    council: String | Number;
    local: Number;
    subunit: Number | String;
    master: Boolean;
    employer: String;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
