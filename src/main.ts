import './style.css'
import todoItem from './todoItem.ts'

const app = document.getElementById('app') as HTMLDivElement;
const test = new todoItem('test', false, new Date(), 1, 'test');

const todoCard = document.createElement('div');
todoCard.classList.add('todo__card');

const todoTitle = document.createElement('h3');
todoTitle.textContent = test.title;
todoCard.appendChild(todoTitle);

app.appendChild(todoCard);

console.log(test.getDetails());