import {todoList} from "./loadHTML";
import {formButton} from "../var";

export function trash() {
    this.parentNode.style.opacity = "0";
    const key = this.parentNode.getAttribute("data-key")
    setTimeout(() => {
        this.parentNode.remove();
        delete todoList[key];
        save()
    },600)
}

export function check() {
    this.parentNode.classList.toggle('flip')

    this.innerHTML = this.innerHTML === '✔️' ? '♻' : '✔️'
    const key = this.parentNode.getAttribute("data-key")
    todoList[key].checked = !todoList[key].checked;
    save()
}

export function animeFormButton(button){
    button.classList.add('formButton-active');
    setTimeout(() => {
        button.classList.remove('formButton-active')
    }, 500)
}

export function save() {
    window.localStorage.setItem('data', JSON.stringify(todoList));
}