import {createHTML} from "./createHTML";
import {formInput} from "../var";


export function createItem(e) {
    e.preventDefault();
    createHTML(formInput.value)
    this.reset();
}