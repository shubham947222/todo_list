// const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.remove("container");
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);

// const todoList = document.querySelector(".todo-list ");
// // todo1.remove();

// const newTodoList = document.createElement("li");
// newTodoList.textContent = "Shubham";
// todoList.append(newTodoList);

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newInnerHtml = `
                <span class="text">${newTodoText}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>
    `;

  newLi.innerHTML = newInnerHtml;
  if (newTodoText != "") {
    todoList.append(newLi);
  }
  //   console.log(newLi);
  todoInput.value = ""; //will clear vale after consoleing
});

todoList.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains("done")) {
    // console.log("done work");
    const liSpan = e.target.parentNode.previousElementSibling;
    // console.log(liSpan);
    liSpan.style.textDecoration = "line-through";
  } else if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    // console.log(targetedLi);
    targetedLi.remove();
  }
});
