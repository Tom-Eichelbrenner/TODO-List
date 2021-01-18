import {itemsList} from "../var";

export function createHTML(todo) {
    const html = `
            <span>${todo}</span>
            <button name="trash" class="trash">🗑️</button>
            <button class="check">✔️</button>
    `
    const li = document.createElement("li");
    li.classList.add('item');
    li.innerHTML = html;
    itemsList.insertBefore(li, itemsList.firstChild);
}