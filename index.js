"use strict";
const input = document.querySelector(".input");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const divide = document.querySelector("#divide");
const power = document.querySelector("#power");
const number = [zero, one, two, three, four, five, six, seven, eight, nine];

let val = 0;
let val2 = 0;
const display = (val) => {
  input.value += val;
  return val;
};
const solve = () => {
  let x = input.value;

  let y = eval(x);
  input.value = y;

  return y;
};

const clear = () => {
  input.value = " ";
};
const allclear = () => {
  input.value = " ";
};
