"use strict";

let resultNode = document.getElementById("result");
let formNode = document.getElementById("form");

// 유저 입력 정보를 화면에 출력하는 함수
const printResult = (msg) => {
  resultNode.innerHTML = msg;
};

// form submit event 발생시 실행할 코드
formNode.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameNode = document.getElementById("name");
  let phonNode = document.getElementById("phoneNum");
  let jobNode = document.getElementById("job");

  let msg = `이름 : ${nameNode.value} <br /> 전화번호 : ${phonNode.value} <br /> 직업 : ${jobNode.value}`;
  printResult(msg);
});
