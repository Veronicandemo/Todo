// "use strict";
const toDoInput = document.querySelector("input");
const toDoButton = document.querySelector("button");
const toDo = document.querySelectorAll(".list_items-container");

const todosContainer = document.querySelector("ul");
toDoInput.focus();

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
    const indexOfItem = this.todos.findIndex((todo) => todo === item);
    if (indexOfItem !== -1) {
      this.todos.splice(indexOfItem, 1);
    }
    // this.todos = this.todos.filter((todo) => todo !== item);
  }

  renderTodo() {
    todosContainer.innerHTML = ""; // Clear the container before rendering
    this.todos.forEach((todo) => {
      todosContainer.insertAdjacentHTML(
        "afterbegin",
        `<li>
            <div class="list_items-container">
              <h2>${todo}</h2>
              <button class="remove_button"><ion-icon name="close-outline" ></ion-icon></button>
            </div>
          </li>`
      );
    });

    const removeButtons = document.querySelectorAll(".remove_button");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const item = e.target.parentElement.querySelector("h2").textContent;
        todo.removeToDo(item);
        todo.renderTodo();
      });
    });
  }
}

const todo = new App();

toDoButton.addEventListener("click", (e) => {
  e.preventDefault();
  todo.addToDo(toDoInput.value);
  todo.renderTodo();
});
window.addEventListener("DOMContentLoaded", () => {
  todo.renderTodo();
  toDoInput.focus();
});
