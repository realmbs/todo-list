import todoItem from './todoItem.ts'

const todoForm = document.getElementById('todoForm') as HTMLFormElement;

const todoList: todoItem[] = [];

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title') as HTMLInputElement;
  const completed = document.getElementById('completed') as HTMLInputElement;
  const dueDate = document.getElementById('dueDate') as HTMLInputElement;
  const priority = document.getElementById('priority') as HTMLInputElement;
  const notes = document.getElementById('notes') as HTMLInputElement;

  const newTodo = new todoItem(title.value, completed.checked, new Date(dueDate.value), priority.value, notes.value);

  todoList.push(newTodo);
  localStorage.setItem('todoList', JSON.stringify(todoList));

  console.log(newTodo.getDetails());
  console.log(todoList);

  title.value = '';
  completed.checked = false;
  dueDate.value = '';
  priority.value = '';
  notes.value = '';
})