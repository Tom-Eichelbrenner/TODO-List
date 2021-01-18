import {createHTML} from "./createHTML";

export let todoList = {}

export function loadHTML(e) {
    if (!window.localStorage.getItem("data")) return
    const data = JSON.parse(window.localStorage.getItem('data'));
    todoList = data;
    Object
        .keys(todoList)
        .map(key => createHTML(todoList[key], key))
}