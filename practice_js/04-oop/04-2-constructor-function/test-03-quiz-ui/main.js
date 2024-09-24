"use strict";

/*
  0. 퍼블리셔가 시안 마크업을 만들어서 줬다.
  1. 내가 동적으로 마크업을 만들어 내야하는 부분은 어디인가?
    - main 안에 있는 div다. 채팅이 올라올 때마다 js로 div를 만들어줘야 하니까.
    - 그래서 div를 지웠다. 동적으로 생성하기 위해서.
  2. 채팅글은 같은 구성이지만 값이 다 다른 것이다. 
    - 그래서 채팅글 객체를 생성하는 생성자 함수를 만들자.
  3. 작업순서
    (1) form에서 유저 입력 받기
*/

function Member(id, nickname, profileImg) {
  this.id = id;
  this.nickname = nickname;
  this.profileImg = profileImg;
}

function Emoji(id) {
  this.msgId = ++msgId;
  this.emojiId = id;
  this.count = 0;
  this.members = [];
  this.add = function (memberId) {
    this.count++;
    this.members.push(memberId);
  };
}

function Message(msg, member) {
  this.msg = msg;
  this.member = member;
  this.date = new Date().toLocaleString();
  this.emojis = [];
  this.addEmoji = function (emojiId, memberId) {
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

// 모든 채팅 메시지(Message 객체)가 저장되는 배열.
let messages = [];

// 채팅 메시지를 식별하기 위해 부여한 id 변수.
// 채팅 메시지가 추가 될때마다 1씩 증가시킨다.
let msgId = 0;

/* 
  필요한 DOM 노드 객체 획득
  1. id
  2. nickname
  3. 메시지
  4. 위 3개를 출력하기 위한 main 노드
*/

// 유저 입력 데이터 노드 객체
let idInputNode = document.getElementById("idInput");
let nicknameInputNode = document.getElementById("nicknameInput");
let msgInputNode = document.getElementById("msgInput");
// 입력 데이터가 출력될 노드 객체
let chatMainNode = document.getElementById("chat-main");

// 화면에 출력하는 함수는 길것이 예상되니 따로 작성
function printMessage(message) {}

// msger-send-btn에 입력된 이벤트 클릭 함수인 send를 정의
function send(e) {
  // 폼 제출시 새로고침 방지
  e.preventDefault();
  // 유저 입력 데이터 추출
  let id = idInputNode.value;
  let nickname = nicknameInputNode.value;
  let msg = msgInputNode.value;

  // 유저 입력 유효성 검증
  // 셋 중 하나라도 입력하지 않으면,
  if (id.trim().length === 0 || nickname.trim().length === 0 || msg.trim().length === 0) {
    // 알림 창이 뜬다.
    alert("아이디, 닉네임, 메시지를 입력해야 합니다.");
    // 알림 창이 뜨면 아래의 코드는 전부 실행 중단
    return;
  } else {
  }

  // 화면에 동적 노드 만들어서 출력

  //
}

//
function printEmoji(message) {}

// 이모지 추가 이벤트 처리하는 함수
function emojiClick() {
  // 이모지를 동적으로 메시지에 출력하는 기능.
}
