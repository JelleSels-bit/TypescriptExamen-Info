import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import {Home} from "./pages/home/home.ts"
import {PokemonPage} from "./pages/pokemon/pokemon.ts";
import {TrainersPage} from "./pages/trainers/trainers.ts";
import {Navbar} from "./components/navbar/navbar.ts";
import {PokemonCard} from "./components/PokemonCard/PokemonCard.ts";
import {TrainerCard} from "./components/TrainerCard/TrainerCard.ts";
import {DeleteBtn} from "./components/deletebtn/deletebtn.ts";
import {Router} from "./router/router.ts";


const homePage = new Home();
homePage.render()

customElements.define("navbar-component", Navbar);
customElements.define("pokemon-card", PokemonCard);
customElements.define("trainer-card", TrainerCard);
customElements.define("custom-delete",DeleteBtn)

new Router({
    '/': Home,
    "/PokemonPage": PokemonPage,
    "/TrainersPage": TrainersPage
})