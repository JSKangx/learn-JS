"use strict";

class Member {
  constructor(id, nickname, profileImg) {
    this.id = id;
    this.nickname = nickname;
    this.profileImg = profileImg;
  }
}

class Emoji {
  constructor(id) {
    this.emojiId = id;
    this.count = 0;
    this.members = [];
  }
  add(memberId) {
    this.count++;
    this.members.push(memberId);
  }
}

class Message {
  constructor(msg, member) {
    this.msg = msg;
    this.member = member;
    this.date = new Date().toLocaleString();
    this.emojis = [];
  }
  addEmoji(emojiId, memberId) {
    if (this.emojis.every((item) => item.emojiId !== emojiId)) {
      let emoji = new Emoji(emojiId);
      emoji.add(memberId);
      this.emojis.push(emoji);
    } else {
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId);
      this.emojis[index].add(memberId);
    }
  }
}

let messages = [];

// 전역에서 쓸 객체 선언
let member; // (1) 서버와 연결할 때 (2) 서버로 데이터 보낼 때
let webSocket; // (2) 서버와 연결할 때 (2) 서버로 데이터 보낼 때

let idInputNode = document.getElementById("idInput");
let nicknameInputNode = document.getElementById("nicknameInput");
let chatMainNode = document.getElementById("chat-main");

// 화면에 있는 두 개의 폼 노드 획득
let connectFormNode = document.getElementById("connectForm");
let msgFormNode = document.getElementById("msgForm");

// connect 버튼을 눌렀을 때 실행되는 함수
/*
  (1) id, nickname 유효성 검사
  (2) id, nickname칸 비워두기
  (3) 새 멤버 객체 생성
  (4) connectForm 가리고, msgForm 보여주기
  (5) 웹소켓 객체 생성(서버 연결)
  (6) 서버에서 메시지를 받았을 때 실행될 콜백함수 연결
*/
function connect(e) {
  e.preventDefault();
  let id = idInputNode.value;
  let nickname = nicknameInputNode.value;
  // (1)
  if (id.trim().length === 0 || nickname.trim().length === 0) {
    alert("아이디와 닉네임을 입력하세요.");
    return;
  } else {
    // (2)
    idInputNode.value = "";
    nicknameInputNode.value = "";
    // (3)
    member = new Member(id, nickname, `images/${id}.jpg`);
    // (4)
    connectFormNode.style.display = "none";
    msgFormNode.removeAttribute("style");
    // (5)
    webSocket = new WebSocket("ws://localhost:3000");
    // (6)
    webSocket.onmessage = onMessage;
  }
}

// 서버에서 데이터를 받았을 때 실행될 함수
function onMessage(data) {
  // let receivedData = JSON.parse(data);
  console.log(data);
}

function printMessage(message) {
  let menuImageNode = document.createElement("img");
  menuImageNode.setAttribute("src", "images/menu.jpg");
  let menuButton = document.createElement("button");
  menuButton.setAttribute("class", "msg-info-menu dropbtn");

  menuButton.appendChild(menuImageNode);
  let link1 = document.createElement("a");
  link1.setAttribute("href", "#"); // 속성 부여
  link1.setAttribute("onclick", `emojiClick('${message.msgId}','thumbup')`);
  let link1Text = document.createTextNode("좋아요");
  link1.appendChild(link1Text);

  let link2 = document.createElement("a");
  link2.setAttribute("href", "#");
  link2.setAttribute("onclick", `emojiClick('${message.msgId}','ok')`);
  let link2Text = document.createTextNode("넵");
  link2.appendChild(link2Text);

  let links = document.createElement("div");
  links.setAttribute("class", "dropdown-content");
  links.appendChild(link1);
  links.appendChild(link2);

  let dropdown = document.createElement("div");
  dropdown.setAttribute("class", "dropdown");
  dropdown.appendChild(menuButton);
  dropdown.appendChild(links);

  let name = document.createElement("div");
  name.setAttribute("class", "msg-info-name");
  name.appendChild(document.createTextNode(message.member.nickname));
  let date = document.createElement("div");
  date.setAttribute("class", "msg-info-time");
  date.appendChild(document.createTextNode(message.date));

  let msgInfo = document.createElement("div");
  msgInfo.setAttribute("class", "msg-info");
  msgInfo.appendChild(name);
  msgInfo.appendChild(date);
  msgInfo.appendChild(dropdown);

  let msgText = document.createElement("div");
  msgText.setAttribute("class", "msg-text");
  msgText.appendChild(document.createTextNode(message.msg));

  let msgBubble = document.createElement("div");
  msgBubble.setAttribute("class", "msg-bubble");
  msgBubble.appendChild(msgInfo);
  msgBubble.appendChild(msgText);

  let photoNode = document.createElement("img");
  photoNode.setAttribute("src", message.member.profileImg);
  photoNode.setAttribute("class", "msg-img");

  let mainNode = document.createElement("div");
  mainNode.setAttribute("id", `msgId-${message.msgId}`);
  mainNode.setAttribute("class", "msg left-msg");
  mainNode.appendChild(photoNode);
  mainNode.appendChild(msgBubble);

  chatMainNode.appendChild(mainNode);
}

let msgInputNode = document.getElementById("msgInput");
// send 버튼을 누를 때 실행될 함수
/*
  (1) 메시지 입력 유효성 검사
  (2) 새 메시지 객체 생성
  - 메시지 객체에 데이터 구분 멤버 삽입
  - 메시지 객체 messages 배열에 추가
  (3) 메시지 입력칸 비워두기
  (4) 화면에 메시지 출력하기
  (5) 생성된 메시지 객체 서버로 전송
*/
function send(e) {
  e.preventDefault();
  let msg = msgInputNode.value;
  if (msg.trim().length === 0) {
    alert("메시지를 입력하세요.");
    return;
  } else {
    let message = new Message(msg, member);
    message.gubun = "msg";
    messages.push(message);
    msgInputNode.value = "";
    printMessage(message);
    webSocket.send(JSON.stringify(message));
  }
}

//
function printEmoji(message) {
  let emojis = message.emojis;
  if (emojis.length > 0) {
    let messageBubble = document.querySelector(`#msgId-${message.msgId} .msg-bubble`);
    let emojiNode = messageBubble.querySelector(".emojis");
    if (emojiNode) {
      messageBubble.removeChild(emojiNode);
    }
    let emojisNode = document.createElement("div");
    emojisNode.setAttribute("class", "emojis");
    emojis.forEach((emoji) => {
      let img = document.createElement("img");
      img.setAttribute("class", "emoji dropbtn");
      img.setAttribute("src", `images/${emoji.emojiId}.jpg`);

      let span = document.createElement("span");
      let nicknameText = emoji.members.join(", ");
      span.appendChild(document.createTextNode(nicknameText));
      let dropdownContent = document.createElement("div");
      dropdownContent.setAttribute("class", "dropdown-content");
      dropdownContent.appendChild(span);

      let dropdown = document.createElement("div");
      dropdown.setAttribute("class", "dropdown");
      dropdown.appendChild(img);
      dropdown.appendChild(dropdownContent);

      let span2 = document.createElement("span");
      span2.setAttribute("class", "emoji-count");
      span2.appendChild(document.createTextNode(`${emoji.count}`));

      emojisNode.appendChild(dropdown);
      emojisNode.appendChild(span2);
    });

    messageBubble.appendChild(emojisNode);
  }
}

function emojiClick(msgId, emojiId) {
  let memberId = prompt("멤버 ID를 입력해주세요.");
  if (memberId == null) {
    alert("입력을 하지 않았습니다.");
  } else {
    let index = messages.findIndex((item) => item.msgId == msgId);
    messages[index].addEmoji(emojiId, memberId);

    printEmoji(messages[index]);
  }
}
