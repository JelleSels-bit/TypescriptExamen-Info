import {Page} from "../../router/page.ts";
import HTML from "./trainers.html?raw";
import {TrainerCard} from "../../components/TrainerCard/TrainerCard.ts";
import {dataManager} from "../../data/data.ts";

export class TrainersPage extends Page{
    readonly #container = this.body.querySelector('#trainerList')!
    constructor() {
        super(HTML);

    }

    render() {
        super.render();
        this.#container.innerHTML = '';
        dataManager.trainers.forEach(t => {
            const trainerCard = new TrainerCard()
            trainerCard.setAttribute("name", t.name)
            trainerCard.setAttribute("age", t.age)
            trainerCard.addEventListener('delete', () => {
                dataManager.trainers = dataManager.trainers.filter(trainer => trainer.id !== t.id)
                this.render()
            })

            this.#container.appendChild(trainerCard)

        })
    }
}