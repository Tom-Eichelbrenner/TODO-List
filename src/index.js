import './css/style.css';
import './css/normalize.css';
import {createItem} from "./js/functions/createItem";
import {todoForm} from "./js/var";
import {loadHTML} from "./js/functions/loadHTML";

function main() {
    window.addEventListener("load", loadHTML)
    todoForm.addEventListener("submit", createItem);
}

main();
