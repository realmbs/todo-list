import todoItem from "../form/todoItem";
const sharedTodoList = localStorage.getItem('todoList');
const todoList: todoItem[] = sharedTodoList ? JSON.parse(sharedTodoList) : [];

console.log(todoList);

const app = document.getElementById('app') as HTMLDivElement;

todoList.forEach(todo => {
  const todoDiv = document.createElement('div') as HTMLDivElement;
  todoDiv.classList.add('todo');

  const title = document.createElement('h3') as HTMLHeadingElement;
  title.innerText = todo.title;
  todoDiv.appendChild(title);

  const completed = document.createElement('p') as HTMLParagraphElement;
  completed.innerText = todo.completed ? 'Completed' : 'Not Completed';
  todoDiv.appendChild(completed);

  const checkBox = document.createElement('input') as HTMLInputElement;
  checkBox.type = 'checkbox';
  checkBox.checked = todo.completed;
  checkBox.addEventListener('change', () => {
    todo.completed = checkBox.checked;
    completed.innerText = todo.completed ? 'Completed' : 'Not Completed';
    localStorage.setItem('todoList', JSON.stringify(todoList));
  });
  todoDiv.appendChild(checkBox);

  const dueDate = document.createElement('p') as HTMLParagraphElement;
  dueDate.innerText = `Due Date: ${todo.dueDate}`;
  todoDiv.appendChild(dueDate);

  const priority = document.createElement('p') as HTMLParagraphElement;
  priority.innerText = `Priority: ${todo.priority}`;
  todoDiv.appendChild(priority);

  const notes = document.createElement('p') as HTMLParagraphElement;
  notes.innerText = `Notes: ${todo.notes}`;
  todoDiv.appendChild(notes);

  const deleteButton = document.createElement('button') as HTMLButtonElement;
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    const index = todoList.indexOf(todo);
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    app.removeChild(todoDiv);
  });
  todoDiv.appendChild(deleteButton);

  app.appendChild(todoDiv);
})