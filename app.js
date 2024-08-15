let input1 = document.querySelector("#one");
let input2 = document.querySelector("#two");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let div = document.querySelector("#div");
let body = document.querySelector("body");

add.addEventListener("click", () => {
  let v1 = parseInt(input1.value);
  let v2 = parseInt(input2.value);
  let result = v1 + v2;
  let item = document.createElement("p");
  item.innerText = result;
  body.append(item);
  input1.value = "";
  input2.value = "";
});
sub.addEventListener("click", () => {
  let v1 = parseInt(input1.value);
  let v2 = parseInt(input2.value);
  let result = v1 - v2;
  let item = document.createElement("p");
  item.innerText = result;
  body.append(item);
  input1.value = "";
  input2.value = "";
});
mul.addEventListener("click", () => {
  let v1 = parseInt(input1.value);
  let v2 = parseInt(input2.value);
  let result = v1 * v2;
  let item = document.createElement("p");
  item.innerText = result;
  body.append(item);
  input1.value = "";
  input2.value = "";
});
div.addEventListener("click", () => {
  let v1 = parseInt(input1.value);
  let v2 = parseInt(input2.value);
  let result = v1 / v2;
  let item = document.createElement("p");
  item.innerText = result;
  body.append(item);
  input1.value = "";
  input2.value = "";
});