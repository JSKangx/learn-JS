"use strict";

/*
  0. 퍼블리셔가 시안 마크업을 만들어서 줬다.
  1. 내가 동적으로 마크업을 만들어 내야하는 부분은 어디인가?
    - 채팅글 하나에 해당하는 main 안에 있는 div다. 채팅이 올라올 때마다 js로 div를 만들어줘야 하니까.
    - 그래서 div를 지웠다. 동적으로 생성하기 위해서.
  2. 채팅글은 같은 구성이지만 값이 다 다른 것이다. 
    - 그래서 채팅글 객체를 생성하는 생성자 함수를 만들자.
    - 지난 시간에 미리 만들어 본 생성자 함수를 사용하겠다.
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

function Emoji(id) {
  this.emojiId = id;
  this.count = 0;
  this.members = [];
  // 어떤 이모지 객체든 공통적인 로직이기에 프로토타입 객체로 옮김
  Emoji.prototype.add = function (memberId) {
    this.count++;
    this.members.push(memberId);
  };
}

function Message(msg, member) {
  this.msgId = ++msgId;
  this.msg = msg;
  this.member = member;
  this.date = new Date().toLocaleString();
  this.emojis = [];
  // 어떤 객체든 똑같이 적용되는 로직이기에 프로토타입 객체로 이동.
  Message.prototype.addEmoji = function (emojiId, memberId) {
    if (this.emojis.every((item) => item.emojiId !== emojiId)) {
      let emoji = new Emoji(emojiId);
      emoji.add(memberId);
      this.emojis.push(emoji);
    } else {
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId);
      this.emojis[index].add(memberId);
    }
  };
}

let messages = [];

let msgId = 0;

let idInputNode = document.getElementById("idInput");
let nicknameInputNode = document.getElementById("nicknameInput");
let msgInputNode = document.getElementById("msgInput");

let chatMainNode = document.getElementById("chat-main");

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
  name.setAttribute("class", "msg-info-time");
  name.appendChild(document.createTextNode(message.date));

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

function send(e) {
  e.preventDefault();
  let id = idInputNode.value;
  let nickname = nicknameInputNode.value;
  let msg = msgInputNode.value;

  if (id.trim().length === 0 || nickname.trim().length === 0 || msg.trim().length === 0) {
    alert("아이디, 닉네임, 메시지를 입력해야 합니다.");
    return;
  } else {
    idInputNode.value = "";
    nicknameInputNode.value = "";
    msgInputNode.value = "";

    let member = new Member(id, nickname, `images/${id}.jpg`);

    let message = new Message(msg, member);
    messages.push(message);

    printMessage(message);
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
