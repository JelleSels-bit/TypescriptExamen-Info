import {Page} from "../../router/page.ts"
import HTML from "./favorites.html?raw"
import type {Ticket} from "../../models/ticket.ts"
import {favoriteRestPersistenceProvider} from "../../data/data.ts";
import {favoriteItem} from "../../components/favoriteItem/favoriteitem.ts";

export class favorites extends Page{

    #favoritesList = this.body.querySelector<HTMLDivElement>('#favorites-list')!

    #Favorites: Ticket[] = []

    constructor() {
        super(HTML);

        this.unsubscribe.push(favoriteRestPersistenceProvider.addObserver(data => {
            this.#Favorites = data
            this.render()
        }))

        void favoriteRestPersistenceProvider.getAll()
    }

    render() {
        super.render();

        this.#favoritesList.innerHTML = ""
        this.#Favorites.forEach(t => {
            const favoriteitem = new favoriteItem()
            favoriteitem.setAttribute('info', t.title)
            this.#favoritesList.appendChild(favoriteitem)
        })


    }
}