import { LitElement, html } from "lit-element";

class EitSwitch extends LitElement {

    static get properties() {
        return {
            checked: { type: Boolean }
        }
    }

    constructor() {
        super();
        this.checked = false;
    }

    render() {
        return html`
        <span @click="${this.doClick}">
            ${this.checked
            ? this.checkedIcon
            : this.unCheckedIcon
            }
        </span>
        `;
    }

    doClick() {
        this.checked = !this.checked;
    }

    get checkedIcon() {
        return html`checkedIcon`;
    }

    get unCheckedIcon() {
        return html`unCheckedIcon`;
    }
}
customElements.define('eit-switch', EitSwitch);