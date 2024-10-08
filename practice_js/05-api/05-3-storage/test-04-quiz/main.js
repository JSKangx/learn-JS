"use strict";
/*
  (1) showHide 함수를 통해 클래스가 부여되고 삭제되는 기능을 넣고, 그것을 재사용한다.
  (2) 결과 화면을 미리 만들어두고, 클래스에 hide를 미리 적용해 놓으면 된다.
    (2-1) 결과 화면에 동적으로 바뀌어야 할 부분만 span 태그로 만들면 된다.
  (3) id, pw 유효성 검증까지 하자. trim, length
*/

let myFormNode = document.getElementById("myForm");
let resultNode = document.getElementById("result");
let idInputNode = document.getElementById("id");
let pwInputNode = document.getElementById("pw");

function logout() {
  myFormNode.removeAttribute("class");
  resultNode.innerHTML = "";
  localStorage.removeItem("id");
  idInputNode.value = "";
  pwInputNode.value = "";
}

myFormNode.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = idInputNode.value;
  let pw = pwInputNode.value;
  if (id === pw) {
    id = id;
    localStorage.setItem("id", id);
    myFormNode.setAttribute("class", "invisible");
    resultNode.innerHTML = `
      ${id}으로 로그인되었습니다.
      <button onclick="logout()">logout</button>
    `;
  } else {
    resultNode.innerHTML = "로그인에 실패하였습니다. 아이디 비밀번호를 확인하세요.";
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("id")) {
    let savedId = localStorage.getItem("id");
    resultNode.innerHTML = `
      ${savedId}으로 로그인되었습니다.
      <button onclick="logout()">logout</button>
    `;
    myFormNode.setAttribute("class", "invisible");
  }
});
