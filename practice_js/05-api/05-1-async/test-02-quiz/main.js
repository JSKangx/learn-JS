"use strict";

// DOM 노드 객체 얻기
let resultNode = document.getElementById("result");
let buttonNode = document.getElementById("button");

// 상태관리 함수
let isShow = false;

// 시간을 얻는 함수
function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let times = `${hours} : ${mins < 10 ? "0" + mins : mins} : ${secs < 10 ? "0" + secs : secs}`;
  return times;
}

// 버튼을 눌렀을 때 (1) 시간 출력 (2) 버튼의 텍스트 변경
function showAndHide() {
  // 안 보일 때 = 버튼이 show 일 때
  if (!isShow) {
    buttonNode.innerHTML = "hide";
    resultNode.removeAttribute("class");
    // 인터벌 함수가 1초 뒤에 실행되니, 버튼을 누르자마자 시간을 한번 찍어주자.
    resultNode.innerHTML = getTime();
    setInterval(() => {
      // 매 초 시간데이터를 얻어서
      let time = getTime();
      // 매 초 새롭게 출력해야 한다.
      resultNode.innerHTML = time;
    }, 1000);
    isShow = true;
  } else {
    buttonNode.innerHTML = "show";
    resultNode.setAttribute("class", "hide");
    isShow = false;
  }
}
