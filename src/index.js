import { legacy_createStore } from "redux"; //import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

//2.reducer : 상태를 변경하는 데이터가 들어있음
const reducer = (count = 0, action) => {
  //reducer는 state와 action을 인수로 받는다.
  //dispatch를 이용하여 action을 보낼수 있음.
  // console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
}; //data를 수정하는 함수담는다.

//1.store :  data를 넣는곳을 생성한다., state(바뀌는 데이터)
const store = legacy_createStore(reducer); //1.store가 생성되면 reducer를 만들어줘야함

//4.subscribe(onChange)
// : 변경사항에 대한 리스너를 담는다.
const onChange = () => {
  number.innerText = store.getState();
  // 변경되는 innerText를 현재상태를 반환하는 getState()로 만들어준다.
};
store.subscribe(onChange);

//3.dispatch(action)
//: type으로 지정된 action을 dispatch에 담아 보내면 타입에 따라 상태가 변경된다.
const handleAdd = () => {
  store.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  store.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
