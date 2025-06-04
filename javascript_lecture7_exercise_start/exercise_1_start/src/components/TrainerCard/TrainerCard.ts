import {CustomElement} from "../../router/customElement.ts";
import HTML from "./TrainerCard.html?raw"

export class TrainerCard extends CustomElement {
    static observedAttributes = ['name', 'age'];
    readonly #name = this.componentBody.querySelector<HTMLDivElement>('#name')!
    readonly #age = this.componentBody.querySelector<HTMLDivElement>('#age')!


    constructor() {
        super(HTML);

        //opvangen van de custom delete element
        const deleteComponent = this.componentBody.querySelector('custom-delete')
        if (deleteComponent){
            deleteComponent.addEventListener('delete', () => {
                this.dispatchEvent(new CustomEvent('delete'))
            })
        }
    }

    attributeChangedCallback(name:string, oldValue:string, newValue:any) {
        switch (name){
            case 'name': {
                this.#name.textContent = newValue;
                break;
            }
            case 'age': {
                this.#age.textContent = newValue;
                break;
            }
        }
    }
}
