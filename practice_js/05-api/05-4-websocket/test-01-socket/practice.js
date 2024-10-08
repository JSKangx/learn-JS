"use strict";

// 아래 변수들은 여러곳에 걸쳐 사용되어야 하기에 전역으로 선언했다.
let nickname; // (1) connection함수, (2) send함수
let webSocket; // (1) conecction함수, (2) send함수
let resultNode; // (1) connection 함수, (2) send함수

function switchShowHide(show, hide) {
  show.removeAttribute("class");
  hide.setAttribute("class", "hidden");
}

// connect 버튼이 클릭되었을 때 실행될 함수
/* 
  (1) #connectDiv를 안 보이게 한다.
  (2) #msgDiv를 보이게 한다.
  (3) #nicknameResult의 innerHTML에 입력한 닉네임을 할당한다.
  (3) 웹소켓 객체를 생성한다.
    - 서버로부터 연결 성공 메시지 받기
    - 다른 유저가 보낸 메시지 받기
*/
function connection() {
  let nicknameInputNode = document.getElementById("nickname");
  nickname = nicknameInputNode.value.trim();

  if (nickname) {
    // (1), (2), (3) 실행
    let connectDivNode = document.getElementById("connectDiv");
    let msgDivNode = document.getElementById("msgDiv");
    let nicknameResultNode = document.getElementById("nicknameResult");
    nicknameResultNode.innerHTML = nickname;
    nickname = nickname;
    switchShowHide(msgDivNode, connectDivNode);

    // (4) 웹소켓 객체 생성 = 서버 연결
    webSocket = new WebSocket("ws://localhost:3000");
    webSocket.onmessage = function (event) {
      //
      let data = JSON.parse(event.data);
      console.log(data);
      let resultNode = document.getElementById("results");
      let liNode = document.createElement("li");

      if (data.nickname) {
        liNode.innerHTML = `(${data.nickname}) => ${data.msg}`;
      } else {
        liNode.innerHTML = `${data.msg}`;
      }
      resultNode.appendChild(liNode);
    };
  } else {
    alert("닉네임을 입력해주세요.");
  }
}

// send 버튼을 누를 때 실행되는 함수
/* 
  (1) 닉네임과 메시지를 서버로 보낸다.
*/
function send() {
  let msgNode = document.getElementById("msg");
  let msg = msgNode.value;
  if (msg) {
    webSocket.send(
      JSON.stringify({
        gubun: "msg",
        nickname: nickname,
        msg: msg,
      })
    );
    msgNode.value = "";
  } else {
    alert("메시지를 입력해주세요");
  }
}
