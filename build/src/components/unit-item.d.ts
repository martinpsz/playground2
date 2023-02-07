import { LitElement } from 'lit';
export declare class UnitItem extends LitElement {
    static styles: import("lit").CSSResult;
    agr_id: String;
    stateLoc: String;
    council: String | Number;
    local: Number;
    subunit: Number | String;
    master: Boolean;
    employer: String;
    render(): import("lit-html").TemplateResult<1>;
}
