import todoItem from './todoItem.ts'

const app = document.getElementById('app');
const title = document.getElementById('title') as HTMLInputElement;
const completed = document.getElementById('completed') as HTMLInputElement;
const dueDate = document.getElementById('dueDate') as HTMLInputElement;
const priority = document.getElementById('priority') as HTMLInputElement;
const notes = document.getElementById('notes') as HTMLInputElement;
const submitButton = document.getElementById('submitButton') as HTMLButtonElement;

const todoList: todoItem[] = [];

submitButton.addEventListener('click', () => {
  const newTodo = new todoItem(title.value, completed.checked, new Date(dueDate.value), parseInt(priority.value), notes.value);
  todoList.push(newTodo);
  console.log(todoList);
  title.value = 'Title:';
  completed.checked = false;
  dueDate.value = '';
  priority.value = '1';
  notes.value = '';
})