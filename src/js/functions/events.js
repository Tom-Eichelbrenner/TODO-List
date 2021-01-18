import {todoList} from "./loadHTML";

export function trash() {
    this.parentNode.remove();
    const key = this.parentNode.getAttribute("data-key")
    delete todoList[key];
    save()
}

export function check() {
    this.innerHTML = this.innerHTML === '✔️' ? '♻' : '✔️'
    const key = this.parentNode.getAttribute("data-key")
    todoList[key].checked = !todoList[key].checked;
    save()
}

export function save() {
    window.localStorage.setItem('data', JSON.stringify(todoList));
}