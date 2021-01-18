import {itemsList} from "../var";

export function createHTML(todo) {
    if (!todo.todo){
        return
    }
    const html = `
            <span>${todo.todo}</span>
            <button name="trash" class="trash">🗑️</button>
            <button class="check">✔️</button>
    `
    const li = document.createElement("li");
    li.classList.add('item');
    li.innerHTML = html;
    itemsList.insertBefore(li, itemsList.firstChild);
}