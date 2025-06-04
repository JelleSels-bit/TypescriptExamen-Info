import {CustomElement} from "../../router/customElement.ts";
import HTML from "./favoriteitem.html?raw"

export class favoriteItem extends CustomElement{
    static observedAttributes = ["info","id"];

    readonly #info = this.componentBody.querySelector<HTMLDivElement>('#favorite-info')
    constructor() {
        super(HTML);
    }

    attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
        switch (name){
            case 'info':
                this.#info.innerText = newValue;
        }
    }
}