"use strict";

let result = document.getElementById("result");
let form = document.getElementById("form");

// 화면에 출력하는 함수
function printResult(msg) {
  result.innerHTML = msg;
}

// form의 submit 순간의 이벤트
form.addEventListener("submit", (e) => {
  /*
    form은 'submit' 이벤트 발생할 때 기본적으로 화면을 갱신처리(브라우저 기본 이벤트)한다. 폼을 제출 + action 속성에 지정해준 url로 리프레시.
    url을 지정 안 해줬기에 자기 자신에게 제출, 자기 자신으로 리프레시.
    그래서 디폴트 이벤트를 막아줘야 한다.
  */
  e.preventDefault();
  printResult("submit event 발생");
});

// form의 reset 순간의 이벤트
form.addEventListener("reset", () => {
  printResult("reset event 발생");
});

// input, select DOM node 획득.
let input1 = document.getElementById("input1");
let select1 = document.getElementById("select1");

// focus 이벤트 핸들러 : 색상 변경
input1.addEventListener("focus", (e) => {
  // input1을 사용할 수도 있지만, event 객체를 통해, 현재 이벤트가 발생한 node 객체 획득 가능.
  // e.target - 현재 이벤트 발생 객체를 지칭하는 것
  e.target.style.background = "pink";
});
input1.addEventListener("blur", (e) => {
  e.target.style.background = "";
  // blur 될 때 유저가 input 칸에 입력한 데이터를 화면에 출력
  printResult(`input data: ${e.target.value}`);
});

select1.addEventListener("focus", (e) => {
  e.target.style.background = "pink";
});
select1.addEventListener("change", (e) => {
  printResult(`input change : ${e.target.value}`);
});
select1.addEventListener("blur", (e) => {
  e.target.style.background = "";
});
