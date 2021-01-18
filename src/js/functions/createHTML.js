import {itemsList} from "../var";
import {check, save, trash} from "./events";

export function createHTML(todo, key) {
    if (!todo.todo) {
        return
    }
    const html = `
            <span>${todo.todo}</span>
            <button name="trash" class="trash">🗑️</button>
            <button name="check" class="check">${todo.checked ? '♻' : '✔️'}</button>
    `
    const li = document.createElement("li");
    li.classList.add('item', todo.checked ? 'flip' : null);
    li.setAttribute("data-key", key);
    li.innerHTML = html;
    itemsList.insertBefore(li, itemsList.firstChild);

    li.children.trash.onclick = trash;
    li.children.check.onclick = check;
}