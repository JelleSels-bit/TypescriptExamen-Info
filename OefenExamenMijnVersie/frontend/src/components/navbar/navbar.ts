import {CustomElement} from "../../router/customElement.ts";
import HTML from "./navbar.html?raw"

export class navbar extends CustomElement{
    constructor() {
        super(HTML);
    }
}