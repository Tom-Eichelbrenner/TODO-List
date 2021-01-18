import {itemsList} from "../var";
import {check, trash} from "./events";

export function createHTML(todo) {
    if (!todo.todo) {
        return
    }
    const html = `
            <span>${todo.todo}</span>
            <button name="trash" class="trash">🗑️</button>
            <button name="check" class="check">✔️</button>
    `
    const li = document.createElement("li");
    li.classList.add('item');
    li.innerHTML = html;
    itemsList.insertBefore(li, itemsList.firstChild);

    li.children.trash.onclick = trash;
    li.children.check.onclick = check;
}