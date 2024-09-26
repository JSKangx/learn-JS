"use strict";

/*
  0. 퍼블리셔가 시안 마크업을 만들어서 줬다.
  1. 내가 동적으로 마크업을 만들어 내야하는 부분은 어디인가?
    - 채팅글 하나에 해당하는 #chat-main 안에 있는 div다. 채팅이 올라올 때마다 js로 div를 만들어줘야 하니까.
    - 그래서 div를 지웠다. 동적으로 생성하기 위해서.
  2. 채팅글은 같은 구성이지만 값이 다 다른 것이다. 
    - 그래서 채팅글 객체를 생성하는 생성자 함수를 만들자.
    - 지난 시간에 미리 만들어 본 생성자 함수를 사용하겠다.
    - 게다가, 채팅글 안에는 장르가 다른 정보의 객체들이 많이 있다. 연관성이 있는 객체마다 생성자 함수를 따로 만들자.
  3. 작업순서
    (1) 필요한 DOM 노드 객체 접근, 전역 변수에 할당
    (2) form 제출 함수 정의
      - 유저 입력 데이터 추출
      - 유저 입력 데이터 유효성 검사
        - id, nickname, message 중 하나라도 입력하지 않으면 경고창
        - 입력하면 폼 제출 이벤트 실행
    (3) printMessage 함수 정의
    (4) emojiClick 함수 정의
      - emoji 객체의 데이터를 관리
    (5) printEmoji 함수 정의
      - emoji를 메시지 버블에 출력
*/

function Member(id, nickname, profileImg) {
  this.id = id;
  this.nickname = nickname;
  this.profileImg = profileImg;
}

// 이모지 객체 생성자 함수 정의
function Emoji(emojiId) {
  this.id = emojiId;
  this.count = 0;
  this.members = [];
  // 이모지 객체의 데이터만 관리하는 함수이기에 이 객체 안에 정의함
  this.addCount = function (memberId) {
    this.count++;
    this.members.push(memberId);
  };
}

// 메시지 전체에 대한 관리
function Message(msg, member) {
  this.msgId = ++msgId;
  this.msg = msg;
  this.date = new Date().toLocaleString();
  this.member = member;
  this.emojis = [];
  this.addEmoji = function (emojiId, memberId) {
    if (this.emojis.every((item) => item.id !== emojiId)) {
      let newEmoji = new Emoji(emojiId);
      newEmoji.addCount(memberId);
      this.emojis.push(newEmoji);
    } else {
      let index = this.emojis.findIndex((item) => item.id == emojiId);
      this.emojis[index].addCount(memberId);
    }
  };
}

// 모든 메시지를 담을 수 있는 배열 선언
let messages = []; // 초기값

// 메시지를 구별할 수 있는 id 선언
let msgId = 0; // 초기값

// 필요한 DOM 노드 객체 얻기
// id, nickname, message input, 결과창 출력 요소
let idInputNode = document.getElementById("idInput");
let nicknameInputNode = document.getElementById("nicknameInput");
let msgInputNode = document.getElementById("msgInput");
let chatMainNode = document.getElementById("chat-main");

// 폼이 제출될 때 마지막에 호출되는 함수
// 생성된 메시지 객체를 화면에 출력해주는 역할을 한다.
function printMessage(message) {
  // 퍼블리셔가 만들어준 마크업 구조를, 가장 하위 노드 객체부터 생성해보자.
  let img = document.createElement("img");
  img.setAttribute("src", "images/menu.jpg");
  let dropbtn = document.createElement("button");
  dropbtn.setAttribute("class", "msg-info-menu dropbtn");
  dropbtn.appendChild(img);

  let link1 = document.createElement("a");
  link1.setAttribute("href", "#");
  link1.setAttribute("onclick", `emojiClick(${message.msgId}, 'thumbup')`);
  let link1Text = document.createTextNode("좋아요");
  link1.appendChild(link1Text);
  let link2 = document.createElement("a");
  link2.setAttribute("href", "#");
  link2.setAttribute("onclick", `emojiClick(${message.msgId}, 'ok')`);
  let link2Text = document.createTextNode("넵");
  link2.appendChild(link2Text);
  let links = document.createElement("div");
  links.setAttribute("class", "dropdown-content");
  links.appendChild(link1);
  links.appendChild(link2);

  let dropdown = document.createElement("div");
  dropdown.setAttribute("class", "dropdown");
  dropdown.appendChild(dropbtn);
  dropdown.appendChild(links);

  let name = document.createElement("div");
  name.setAttribute("class", "msg-info-name");
  name.appendChild(document.createTextNode(message.member.nickname));
  let time = document.createElement("div");
  time.setAttribute("class", "msg-info-time");
  time.appendChild(document.createTextNode(message.date));

  let msgInfo = document.createElement("div");
  msgInfo.setAttribute("class", "msg-info");
  msgInfo.appendChild(name);
  msgInfo.appendChild(time);
  msgInfo.appendChild(dropdown);

  let msgText = document.createElement("div");
  msgText.setAttribute("class", "msg-text");
  msgText.appendChild(document.createTextNode(message.msg));

  let msgBubble = document.createElement("div");
  msgBubble.setAttribute("class", "msg-bubble");
  msgBubble.appendChild(msgInfo);
  msgBubble.appendChild(msgText);

  let profile = document.createElement("img");
  profile.setAttribute("src", `images/${message.member.id}.jpg`);
  profile.setAttribute("class", "msg-img");

  let chat = document.createElement("div");
  chat.setAttribute("id", `msgId-${message.msgId}`);
  chat.setAttribute("class", "msg left-msg");
  chat.appendChild(profile);
  chat.appendChild(msgBubble);

  chatMainNode.appendChild(chat);
}

function send(e) {
  // 기본 이벤트 막기
  e.preventDefault();
  // 유저 입력값 추출
  let id = idInputNode.value;
  let nickname = nicknameInputNode.value;
  let msg = msgInputNode.value;
  // 유저 입력 유효성 검사
  if (id.trim().length === 0 || nickname.trim().length === 0 || msg.trim().length === 0) {
    alert("아이디, 닉네임, 메시지를 모두 입력해주세요.");
    return;
  } else {
    idInputNode.value = "";
    nicknameInputNode.value = "";
    msgInputNode.value = "";
    // 멤버 객체 생성.
    let member = new Member(id, nickname, `images/${id}.jpg`);
    // 메시지 객체 생성
    let message = new Message(msg, member);
    // 메시지 객체를 messages 배열에 넣어
    messages.push(message);
    // 메시지를 화면에 출력
    printMessage(message);
  }
}

function printEmoji() {}

// (1) 특정 메시지 객체에 이모지를 추가하는 함수 (2) printEmoji 함수 호출
function emojiClick(msgId, emojiId) {
  let memberNickname = prompt("당신의 닉네임을 입력하세요.");
  if (memberNickname.trim() === null || memberNickname.trim().length === 0) {
    alert("닉네임을 입력하세요.");
  } else {
    //
    let index = messages.findIndex((item) => item.msgid == msgId);
    messages[index].addCount(emojiId, memberNickname);

    printEmoji(messages[index]);
  }
}
