"use strict";
/*
  (1) showHide 함수를 통해 클래스가 부여되고 삭제되는 기능을 넣고, 그것을 재사용한다.
  (2) 결과 화면을 미리 만들어두고, 클래스에 hide를 미리 적용해 놓으면 된다.
    (2-1) 결과 화면에 동적으로 바뀌어야 할 부분만 span 태그로 만들면 된다.
  (3) id, pw 유효성 검증까지 하자. trim, length
*/

function switchShowHide(show, hide) {
  show.removeAttribute("class");
  hide.setAttribute("class", "invisible");
}

function logout() {
  localStorage.removeItem("id");
  idInputNode.value = "";
  pwInputNode.value = "";
  switchShowHide(myFormNode, resultNode);
}

// DOM 노드 획득
let myFormNode = document.getElementById("myForm");
let idInputNode = document.getElementById("id");
let pwInputNode = document.getElementById("pw");
let resultNode = document.getElementById("result");
let idSpanNode = document.getElementById("idSpan");

// 폼 제출시 실행할 함수
myFormNode.addEventListener("submit", (e) => {
  e.preventDefault();
  // 로그인 유효성 검증
  let id = idInputNode.value;
  let pw = pwInputNode.value;
  if (id.trim().length === 0 || pw.trim().length === 0) {
    alert("아이디와 패스워드를 입력해주세요.");
  } else if (id !== pw) {
    alert("아이디와 비밀번호가 일치하지 않습니다.");
  } else {
    // console.log("로그인에 성공하였습니다.");
    // 로그인 성공시 실행할 코드
    idSpanNode.innerHTML = id;
    localStorage.setItem("id", id);
    switchShowHide(resultNode, myFormNode);
  }
});

window.onload = function () {
  let savedId = localStorage.getItem("id");
  if (savedId) {
    idSpanNode.innerHTML = savedId;
    switchShowHide(resultNode, myFormNode);
  } else {
    switchShowHide(myFormNode, resultNode);
  }
};
