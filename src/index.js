const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const hadlerAdd = () => {
  count = count + 1;
  updateText();
};
const hadlerMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", hadlerAdd);
minus.addEventListener("click", hadlerMinus);
