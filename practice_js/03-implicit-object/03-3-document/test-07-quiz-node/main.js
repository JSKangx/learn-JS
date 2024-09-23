"use strict";

function addList() {
  // input의 입력값 획득
  let toDo = document.getElementById("input");
  // input의 입력값을 받아 텍스트 노드를 생성하여 todoList에 할당
  let todoList = document.createTextNode(toDo.value);
  // list 라는 li 태그의 노드 생성
  let list = document.createElement("li");
  // todoList라는 텍스트 노드를 list의 자식으로 삽입
  list.appendChild(todoList);
  // 결과 보여주는 ul의 노드를 획득
  let resultNode = document.getElementById("result");
  // li 태그의 기능을 하는 list를 결과 창의 첫 번째 자식으로 삽입.
  resultNode.insertBefore(list, resultNode.childNodes[0]);
  toDo.value = "";

  list.addEventListener("click", function () {
    resultNode.removeChild(this);
  });
}
