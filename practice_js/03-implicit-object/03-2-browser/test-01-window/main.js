"use strict";

// window의 기본 정보 출력
console.log("html 문서의 너비", window.innerWidth, "html 문서의 높이", window.innerHeight);
console.log("브라우저 창의 너비", window.outerWidth, "브라우저 창의 높이", window.outerHeight);
console.log(window.screenLeft, window.screenTop);

// 스크롤 이벤트가 발생한 경우 스크롤 정보 로그
window.addEventListener("scroll", () => {
  console.log(window.scrollX, window.scrollY);
});

// 새 창을 여는 함수
// (1) 새 탭에서 새 창 열기
function myOpen1() {
  window.open("http://www.google.com");
}
// (2) 현재 탭에서 새 창 열기
function myOpen2() {
  window.open("http://www.google.com", "_self");
}

// 특정 자식 창만 제어하기 위한 변수 선언.
let childWindow;

// (3) 새로운 창의 옵션 지정
function myOpen3() {
  // window.open을 통해 뜬 창을 변수에 할당.
  childWindow = window.open("http://www.google.com", "_blank", "left=100, top=100, width=300, height=300");
  if (childWindow === null) {
    alert("팝업이 차단되었습니다. 해제해 주세요.");
  }
}

// 열린 창을 닫아보자.
function myClose() {
  childWindow.close();
}

function myScroll() {
  window.scrollBy(100, 500);
}
