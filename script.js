import {addTask} from "./components/addTask.js"
import { displayTask } from "./components/readTask.js";

const btn = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');


//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

let max = 32;

input.addEventListener('keyup', function (event) {
    event.target.value = event.target.value.substring(0, max)
})


displayTask();