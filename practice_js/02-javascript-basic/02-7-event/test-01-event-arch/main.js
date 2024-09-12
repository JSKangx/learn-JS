"use strict";

// html 문서(DOM node) 로딩 완료 이벤트 테스트

// 1. 유저가 발생시키는 것이 아니라 브라우저가 이벤트 소스
// (1) addEventListener 사용하는 방법
window.addEventListener("load", () => {
  console.log("html 문서 로딩이 완료되었습니다. (1)");
});

// (2) on*** 함수 사용하는 방법
window.onload = () => {
  console.log("html 문서 로딩이 완료되었습니다. (2)");
};

// 2. 화면에서 발생하는 유저 이벤트
const myEventHandler = () => {
  console.log("myEventHandler... Button is clicked");
};

// (1) addEventListener를 사용
let button1Node = document.getElementById("button1");
button1Node.addEventListener("click", () => {
  console.log("Button 1 is clicked!");
});

// (2) on*** 메서드 사용
let button2Node = document.getElementById("button2");
button2Node.onclick = () => {
  console.log("Button 2 is clicked!");
};
