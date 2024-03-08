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
  completed.innerText = `Completed: ${todo.completed}`;
  todoDiv.appendChild(completed);

  const dueDate = document.createElement('p') as HTMLParagraphElement;
  dueDate.innerText = `Due Date: ${todo.dueDate}`;

  if (todo.dueDate) {
    todoDiv.appendChild(dueDate);
  } else {
    dueDate.style.display = 'none';
  }

  const priority = document.createElement('p') as HTMLParagraphElement;
  priority.innerText = `Priority: ${todo.priority}`;
  todoDiv.appendChild(priority);

  const notes = document.createElement('p') as HTMLParagraphElement;
  notes.innerText = `Notes: ${todo.notes}`;
  todoDiv.appendChild(notes);

  app.appendChild(todoDiv);
})