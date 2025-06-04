import {Page} from "../../router/page.ts";
import HTML from "./home.html?raw";

export class Home extends Page {
    constructor() {
        super(HTML);
    }
}