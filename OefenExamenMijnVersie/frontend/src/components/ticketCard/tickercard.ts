import {CustomElement} from "../../router/customElement.ts";
import HTML from "./ticket.html?raw"

export class ticketcard extends CustomElement{

    static observedAttributes = ["title", "date", "location","type","price", "favorite"];

    readonly #title = this.componentBody.querySelector<HTMLDivElement>('#title')
    readonly #date = this.componentBody.querySelector<HTMLDivElement>('#date')
    readonly #location = this.componentBody.querySelector<HTMLDivElement>('#location')
    readonly #type = this.componentBody.querySelector<HTMLDivElement>('#type')
    readonly #price = this.componentBody.querySelector<HTMLDivElement>('#price')
    readonly #favoriteBtn = this.componentBody.querySelector<HTMLButtonElement>('#favorite-button')

    #IsFavorite: boolean = false

    constructor() {
        super(HTML);

        this.#favoriteBtn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('favorite'))
        })

    }


    attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
        switch (name){
            case 'title':

                // @ts-ignore
                this.#title.innerText = newValue;
                break
            case 'date':
                // @ts-ignore
                this.#date.innerText = newValue;
                break
            case 'location':
                // @ts-ignore
                this.#location.innerText = newValue;
                break
            case 'type':
                // @ts-ignore
                this.#type.innerText = newValue;
                break
            case 'price':
                // @ts-ignore
                this.#price.innerText = newValue;
                break
            case 'favorite':
                // Zet favorite op true als het attribuut 'true' is
                    this.#IsFavorite = newValue === 'true'
                if (this.#IsFavorite)
                {
                    this.#favoriteBtn.setAttribute('class','btn btn-success')
                    this.#favoriteBtn.innerHTML = '&check;'
                } else{
                    this.#favoriteBtn.setAttribute('class','btn btn-primary')
                    this.#favoriteBtn.innerHTML = '+'
                }
                break

        }
    }
}