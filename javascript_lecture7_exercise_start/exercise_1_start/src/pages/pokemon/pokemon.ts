import {Page} from "../../router/page.ts";
import HTML from "./pokemon.html?raw";
import {PokemonCard} from "../../components/PokemonCard/PokemonCard.ts";
import {dataManager} from "../../data/data.ts";

export class PokemonPage extends Page{
    readonly #container = this.body.querySelector('#pokemonList')!
    constructor() {
        super(HTML);
        this.render()

    }

    render() {
        super.render();

        this.#container.innerHTML = '';
        dataManager.pokemon.forEach(p => {
            const pokemonCard = new PokemonCard()
            pokemonCard.setAttribute('title', p.name)
            pokemonCard.setAttribute('types', p.types.join(', '))
            pokemonCard.setAttribute('gen', p.generation)
            pokemonCard.setAttribute('id', p.id)
            pokemonCard.addEventListener('delete', () => {
                dataManager.pokemon = dataManager.pokemon.filter(pokemon => pokemon.id !== p.id)
                this.render()
            })
            this.#container.appendChild(pokemonCard)
        })
    }
}