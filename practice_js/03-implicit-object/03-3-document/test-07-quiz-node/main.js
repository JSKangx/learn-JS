"use strict";

function addList() {
  let toDo = document.getElementById("input").value;
  let list = document.createElement("li");
  let todoList = document.createTextNode(toDo);
  list.appendChild(todoList);
  let resultNode = document.getElementById("result");
  resultNode.insertBefore(list, resultNode.childNodes[0]);
  console.log(toDo);
}
