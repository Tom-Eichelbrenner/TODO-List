import {createHTML} from "./createHTML";

export let todoList = {
    todo1: {
        todo: "Faire a mange",
        checked: false
    },
    todo2: {
        todo: "Faire la vaisselle",
        checked: true
    }
}

export function loadHTML(e) {
    const data = JSON.parse(window.localStorage.getItem('data'));
    todoList = data;
    Object
        .keys(todoList)
        .map(key => createHTML(todoList[key], key))
}