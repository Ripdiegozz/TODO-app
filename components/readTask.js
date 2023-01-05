import { createTask } from "./addTask.js";
import dateElement from './dateElement.js';
import {uniqueDates, orderDates} from '../services/date.js'

export const displayTask = () => {
    const list = document.querySelector('[data-list]')
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDates(taskList);
    orderDates(dates)    
    dates.forEach(e => {
        const day = dayjs(e, "DD-MM-YYYY")
        list.appendChild(dateElement(e))

        taskList.forEach((e) => {
            const taskDate = dayjs(e.dateFormat, "DD/MM/YYYY")
            const diff = day.diff(taskDate, "day")                                
            if (diff == 0 || diff == NaN){
                list.appendChild(createTask(e))   
            }    
        });
    });
};