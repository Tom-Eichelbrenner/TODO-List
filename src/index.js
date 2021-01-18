import './css/style.css';
import './css/normalize.css';

const todoForm = document.querySelector(".form");
const formInput = document.querySelector(".form>input");
const itemsList = document.querySelector(".list-items");

function createHTML(todo) {
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

function createItem(e) {
    e.preventDefault();
    createHTML(formInput.value)
    this.reset();
}

todoForm.addEventListener("submit", createItem);