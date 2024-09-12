"use strict";

window.addEventListener("load", () => {
  // click, dblclick, down/up event
  let button = document.getElementById("button");
  button.addEventListener("click", () => {
    console.log("button is clicked");
  });
  button.addEventListener("dblclick", () => {
    console.log("button is double clicked");
  });
  button.addEventListener("mousedown", () => {
    console.log("mouse down");
  });
  button.addEventListener("mouseup", () => {
    console.log("mouse up");
  });

  // mouse move 이벤트 (유저가 마우스를 이동하는 순간에)
  let area = document.getElementById("area");
  let result = document.getElementById("result");

  area.addEventListener("mousemove", (e) => {
    result.innerHTML = `offset(${e.offsetX}, ${e.offsetY}), page(${e.pageX}, ${e.pageY})`;
  });
  area.addEventListener("mouseleave", () => {
    result.innerHTML = "";
  });

  // enter, over의 차이점 : 버블링
  let outer = document.getElementById("outer");
  let inner = document.getElementById("inner");

  outer.addEventListener("mouseenter", () => {
    console.log("outer mouse enter");
  });
  inner.addEventListener("mouseenter", () => {
    console.log("inner mouse enter");
  });
  outer.addEventListener("mouseover", () => {
    console.log("outer mouse over");
  });
  inner.addEventListener("mouseover", () => {
    console.log("inner mouse over"); // inner mouse over + outer mouse over
  });
});
