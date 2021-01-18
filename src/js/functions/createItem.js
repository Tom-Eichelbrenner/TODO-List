import {createHTML} from "./createHTML";
import {formInput} from "../var";
import {todoList} from "./loadHTML";


export function createItem(e) {
    e.preventDefault();

    const timestamp = Date.now();
    todoList[timestamp] = {
        todo: formInput.value,
        checked: false
    }

    createHTML(todoList[timestamp])
    this.reset();
}