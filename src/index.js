import { legacy_createStore } from "redux"; //import {createStore} from "redux";
//store는 data를 넣는곳을 생성한다., state(바뀌는 데이터)

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  //reducer는 state와 action을 인수로 받는다.
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type == -"MINUS") {
    return count - 1;
  } else {
    return count;
  }
}; //data를 수정하는 함수담는다.

const store = legacy_createStore(reducer); //1.store가 생성되면 reducer를 만들어줘야함
console.log(store.getState()); //0

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "MINUS" });
console.log(store.getState()); //getState(); :

// let count = 0; //state
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const hadlerAdd = () => {
//   count = count + 1;
//   updateText();
// };
// const hadlerMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", hadlerAdd);
// minus.addEventListener("click", hadlerMinus);
