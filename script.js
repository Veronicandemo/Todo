"use strict";
const toDoInput = document.querySelector("input");
const toDoButton = document.querySelector("button");
const toDo = document.querySelectorAll(".list_items-container");
console.log("THis only runs once");

const todosContainer = document.querySelector("ul");

/////////////////////
class App {
  constructor() {
    this.todos = [];
  }
  addToDo(text) {
    if (!text) return;
    this.todos.push(text);
  }
  removeToDo(item) {
    console.log("Hey");
    // this.todos.indexOf(toDo)
    const indexOfItem = this.todos.findIndex((item) => item === item);
    if (indexOfItem !== -1) {
      this.todos.splice(indexOfItem, 1);
    }
    // this.todos = this.todos.filter((todo) => todo !== item);
  }
  markCompleteTodo() {}

  renderTodo() {
    this.todos.map((todo) => {
      todosContainer.insertAdjacentHTML(
        "afterbegin",
        `
      <li>
          <div class="list_items-container">
            <h2>${todo}</h2>
           <button> <ion-icon  name="close-outline" class="remove_button"></ion-icon></button>
          </div>
        </li>`
      );
    });
  }
}

const todo = new App();

toDoButton.addEventListener("click", (e) => {
  e.preventDefault();
  todo.addToDo(toDoInput.value);
  todo.renderTodo();
});
// window.addEventListener("DOMContentLoaded", () => {
//   const removeButton = document.querySelectorAll(".toDo");
//   console.log(removeButton, "hey");
//   removeButton.forEach((btn) => {
//     // button = btn.closest(".remove_button");
//     btn.addEventListener("click", () => {
//       console.log("hey");
//     });

// todosContainer.addEventListener("click", (event) => {
//   if (event.target.tagName === "toDoButton")
//     console.log("removeButton", event.target);

// todo.removeToDo(e.target.value);
// });
// console.log(removeButton);
// });
