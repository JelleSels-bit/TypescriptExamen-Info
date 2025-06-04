import {CustomElement} from "../../router/customElement.ts";
import HTML from "./deletebtn.html?raw"

export class DeleteBtn extends CustomElement {

    #deleteBtn = this.componentBody.querySelector<HTMLButtonElement>('#delete')!
    constructor() {
        super(HTML);


        this.#deleteBtn.addEventListener('click', (evt) => {
            evt.preventDefault()
            const event = new CustomEvent('delete')
            this.dispatchEvent(event)

        })
    }




}