import {Page} from "../../router/page.ts"
import HTML from "./festivals.html?raw"
import {ticketcard} from "../../components/ticketCard/tickercard.ts";
import type {Ticket} from "../../models/ticket.ts"
import {favoriteRestPersistenceProvider} from "../../data/data.ts";




export class festivals extends Page{
    #tickets: Ticket[] = []
    #favorites: Set<String> = new Set()
    readonly #container = this.body.querySelector<HTMLDivElement>('#tickets')!
    readonly #filterbtn = this.body.querySelector<HTMLButtonElement>('#filter-btn')!
    readonly #TypeMatch = this.body.querySelector<HTMLSelectElement>('#type-filter')!
    readonly #titleMatch = this.body.querySelector<HTMLInputElement>('#title-filter')!

    constructor() {
        super(HTML);
        void this.#fetchTickets()

        this.unsubscribe.push(favoriteRestPersistenceProvider.addObserver(data => {
            console.log('IN AUTHOR OBSERVER')
            this.#favorites = new Set(data.map(x => x.id))
            this.render()
        }))

        void favoriteRestPersistenceProvider.getAll()

        this.#filterbtn.addEventListener('click', (evt) => {
            evt.preventDefault()
            this.render()
        })
    }

    render() {
        super.render();
        this.#container.innerHTML = ""
        this.#tickets
            .filter(ticket => this.#festivalFilter(ticket))
            .forEach(t => {
            const ticketCard = new ticketcard()
            ticketCard.setAttribute('title', t.title)
            ticketCard.setAttribute('date',t.date)
            ticketCard.setAttribute('location', t.location)
            ticketCard.setAttribute('type', t.type)
            ticketCard.setAttribute('price',t.price.toString())
            ticketCard.setAttribute('favorite', this.#favorites.has(t.id) ? 'true' : 'false')

            ticketCard.addEventListener('favorite', async () => {
                if (this.#favorites.has(t.id)) {
                    await favoriteRestPersistenceProvider.delete(t.id)
                }else {
                    await favoriteRestPersistenceProvider.create(t)
                }
            })
            this.#container.appendChild(ticketCard)

        })

    }

    #festivalFilter(festival: Ticket) {
        const titleMatches = festival.title.toLowerCase().includes(this.#titleMatch.value.toLowerCase())
        const typeMatches = festival.type === this.#TypeMatch.value || this.#TypeMatch.value === '0'
        return titleMatches && typeMatches
    }



    async #fetchTickets(): Promise<void>{
        const url = "http://localhost:3000/tickets"

        const response = await fetch(url)
        if (!response.ok) throw new Error(`Failed to fetch items: ${response.statusText}`)

        this.#tickets = await response.json()
        this.render()

    }


}