import {CustomElement} from "../../router/customElement.ts";
import HTML from "./PokemonCard.html?raw"

export class PokemonCard extends CustomElement {
   static observedAttributes = ['title', 'types', 'gen', 'id'];
   readonly #title = this.componentBody.querySelector<HTMLDivElement>('#title')!
   readonly #types = this.componentBody.querySelector<HTMLDivElement>('#type')!
   readonly #gen = this.componentBody.querySelector<HTMLDivElement>('#gen')!
   readonly #id = this.componentBody.querySelector<HTMLDivElement>('#id')!

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

    switch (name) {
    case 'title': {
    this.#title.textContent = newValue;
        break;
    }
    case 'types': {
        this.#types.textContent = newValue;
        break;
    }
    case 'gen': {
        this.#gen.textContent = newValue;
        break
    }
    case 'id': {
        this.#id.textContent = newValue;
        break;
    }
    }
    }
    }