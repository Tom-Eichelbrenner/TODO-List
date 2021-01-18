import './css/style.css';
import './css/normalize.css';
import {createItem} from "./js/functions/createItem";
import {todoForm} from "./js/var";


todoForm.addEventListener("submit", createItem);