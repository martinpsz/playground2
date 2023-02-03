var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/form-elements/form-nav';
let UnitForm = class UnitForm extends LitElement {
    selection;
    constructor() {
        super();
        this.selection;
    }
    render() {
        console.log(`The selection is ${this.selection}`);
        return html `<div>
      <form-nav></form-nav>
    </div>`;
    }
};
__decorate([
    property()
], UnitForm.prototype, "selection", void 0);
UnitForm = __decorate([
    customElement('unit-form')
], UnitForm);
export { UnitForm };
//# sourceMappingURL=unit-form.js.map