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
        this.addEventListener('click', () => {
            this.checked = !this.checked;
        })
    }

    render() {
        return html`
        <span>
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