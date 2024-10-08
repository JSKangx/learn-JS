"use strict";

let webSocket;
let nickname;
let resultNode;
let msgNode;

function connection() {
  let nicknameNode = document.getElementById("nickname");
  resultNode = document.getElementById("results");
  msgNode = document.getElementById("msg");

  nickname = nicknameNode.value.trim();
  if (nickname) {
    // connect 버튼이 눌렸는데 닉네임이 입력된 게 있다면
    // 새 웹소켓 객체 생성
    webSocket = new WebSocket("ws://localhost:3000");

    let connectNode = document.getElementById("connectDiv");
    let msgNode = document.getElementById("msgDiv");
    let nicknameResultNode = document.getElementById("nicknameResult");

    msgNode.style.display = "block";
    connectNode.style.display = "none";
    nicknameResultNode.innerHTML = nickname;
  } else {
    // connect 버튼이 눌렸는데 닉네임이 입력된 게 없다면
    alert("nickname을 입력해주세요");
  }

  nicknameNode.value = "";

  // 서버에서 데이터 들어올 때의 이벤트 리스너
  webSocket.onmessage = (event) => {
    // 메시지는 한번에 만들어지는 것이 아니라 계속 만들어지는 것이기에 createElement
    let liNode = document.createElement("li");
    // 서버에서 넘어오는 데이터가 json 문자열 데이터이기 때문에 파싱해줌.
    let jsonData = JSON.parse(event.data);
    liNode.innerHTML = jsonData.nickname ? `${jsonData.nickname} => ${jsonData.msg}` : `${jsonData.msg}`;
    //
    resultNode.appendChild(liNode);
  };
}
function send() {
  let msg = msgNode.value.trim();
  if (msg) {
    webSocket.send(
      JSON.stringify({
        // nickname : nickname의 축약형
        nickname,
        msg,
      })
    );
    let liNode = document.createElement("li");
    liNode.innerHTML = `${nickname} => ${msg}`;
    resultNode.appendChild(liNode);
  } else {
    alert("메시지를 입력해주세요.");
  }
}
