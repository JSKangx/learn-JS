"use strict";

let formNode = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 이벤트 막기

  // DOM 노드 획득
  let userName = document.querySelector("#name").value;
  let hobbyNodes = document.querySelectorAll('input[name="hobby"]:checked');
  let hobbyResults = "";
  hobbyNodes.forEach((item) => {
    hobbyResults += item.value;
  });
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let resultNode = document.querySelector("#result");

  resultNode.innerHTML = `
  이름 : ${userName} <br />
  취미 : ${hobbyResults} <br />
  성별 : ${gender}
  `;
});
