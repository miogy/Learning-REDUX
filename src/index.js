import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }]; //스프레드 : 새로운 배열을 return
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};
const store = legacy_createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// const createToDo = (toDo) => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

const addBtn = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // createToDo(toDo);
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", addBtn);
