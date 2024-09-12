"use strict";

// DOM node 객체 획득
let formNode = document.getElementById("form");
let resultNode = document.getElementById("result");

// 화면에 출력하는 함수
const printResult = (name, phone, job) => {
  resultNode.innerHTML = `이름 : ${name} <br> 전화번호 : ${phone} <br> 직업 : ${job}`;
};

// 폼을 제출했을 때의 event
formNode.addEventListener("submit", (e) => {
  e.preventDefault();
  // 나는 change 핸들러를 썼는데, 그건 개별적 input 에 건 것이라 여기선 적절 X
  // submit event가 발생했을 때, DOM node 객체를 획득하고, 그 객체의 value를 변수에 할당해서 출력하면 좋다.
  let name = document.getElementById("name").value;
  let phoneNum = document.getElementById("phoneNum").value;
  let job = document.getElementById("job").value;
  printResult(name, phoneNum, job);
});
