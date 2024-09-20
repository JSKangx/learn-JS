"use strict";

function sumbit() {
  // DOM 노드 획득
  let userName = document.querySelector("#userName").value;
  let hobbyNodes = document.getElementsByName("hobby");
  let genderNodes = document.getElementsByName("gender");
  let resultNode = document.querySelector(".result");

  // for (let i = 0; i < hobbyNodes.length; i++) {
  //   console.log(hobbyNodes[i].value);
  //   if (hobbyNodes[i].checked === true) {
  //     console.log(hobbyNodes.value);
  //   }
  // }
  console.log(hobbyNodes);
}
