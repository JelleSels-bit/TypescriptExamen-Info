import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {Router} from "./router/router.ts";
import {navbar} from "./components/navbar/navbar.ts";
import {favorites} from "./pages/favorites/favorites.ts";
import {festivals} from "./pages/festivals/festivals.ts";
import {ticketcard} from "./components/ticketCard/tickercard.ts";
import {favoriteItem} from "./components/favoriteItem/favoriteitem.ts";


customElements.define('custom-navbar', navbar);
customElements.define('ticket-card', ticketcard)
customElements.define('favorite-item', favoriteItem)

new Router({
    '/': festivals,
    '/favorites': favorites
})