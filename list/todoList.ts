import todoItem from "../form/todoItem";
const sharedTodoList = localStorage.getItem('todoList');
const todoList: todoItem[] = sharedTodoList ? JSON.parse(sharedTodoList) : [];

console.log(todoList);