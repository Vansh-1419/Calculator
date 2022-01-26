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
input.value = Number(" ");
const array = [zero, one, two, three, four, five, six, seven, eight, nine];
for (let i = 0; i < array.length; i++) {
  array[i].addEventListener("click", () => {
    input.value = Number(`${input.value}` + `${array[i].textContent}`);
  });
}

const add = document.querySelector("#add").addEventListener("click", () => {
  input.value = input.value + `+`;
});
