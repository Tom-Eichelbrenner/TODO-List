import {createHTML} from "./createHTML";

export let todoList = {
    todo1: {
        todo: "Faire a mange"
    },
    todo2: {
        todo: "Faire la vaisselle"
    }
}

export function loadHTML(e) {
    Object
        .keys(todoList)
        .map(key => createHTML(todoList[key]))
}