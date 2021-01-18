import {createHTML} from "./createHTML";
import {formButton, formInput} from "../var";
import {todoList} from "./loadHTML";
import {animeFormButton, save} from "./events";


export function createItem(e) {
    e.preventDefault();
    animeFormButton(formButton)

    const timestamp = Date.now();
    todoList[timestamp] = {
        todo: formInput.value,
        checked: false
    }

    createHTML(todoList[timestamp], timestamp)
    save()
    this.reset();
}