import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTask } from './readTask.js';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'


export const addTask = (evento) => {
  evento.preventDefault();
  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');

  const value = input.value;
  const date = calendar.value;
  const dateFormat = dayjs(date).format("MM/DD/YYYY");
    
  if (value == '' || date == ''){
    swal("Estimado usuario", "Debes rellenar el nombre de la tarea y colocarle una fecha estimada de culminación.", "info");
    return; 
  };

  input.value = '';
  calendar.value = '';

  const complete = false;
    
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskObject = {
    value,
    dateFormat,
    complete,
    id: nanoid(15)
  }

  list.innerHTML = ''

  taskList.push(taskObject)
  localStorage.setItem("tasks", JSON.stringify(taskList))

  displayTask()
};

export const createTask = ({value, dateFormat, complete, id}) => {
    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;

    const check = taskContent.appendChild(checkComplete(id));

    if (complete){
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    }

    taskContent.appendChild(titleTask);
    taskContent.classList.add("card__title-div")

    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));

    return task;
};