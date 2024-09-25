"use strict";

/*
  외부에서 데이터를 받아들여야 하는 것 : 매개변수
  내부에서 데이터를 조작할 수 있는 것 : 메서드
  객체 생성자 함수는 각 역할별로 잘게 쪼개어 만든다.
    (1) 메시지 내용과 시각 생성
      - 메시지에 이모지 추가 및 업데이트 메서드
    (2) 유저 데이터
    (3) 이모지 데이터
      - 이모지 클릭 멤버 추가 메서드 
*/

// 멤버 객체 생성자 함수 정의
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

// (1) 새 메시지가 생성되는 테스트
// 새 멤버 객체 생성
let member1 = new Member("Alberto", "A", "alberto.png");
// 새 메시지 객체 생성
let message1 = new Message("Hi, I'm Alberto.", member1);
messages.push(message1);
console.log(messages);

// (2) 새 메시지가 또 생성되는 테스트
// 새 멤버 객체 생성
let member2 = new Member("Betty", "B", "betty.png");
// 베티의 메시지
let message2 = new Message("Hi, Alberto! Nice to meet you!", member2);
messages.push(message2);
console.log(messages);

// (3) 1번 메시지에 이모지가 추가되는 테스트
message1.addEmoji("hi", member2.id);
console.log(messages);

// (4) 1번 메시지에 다른 이모지가 추가되는 테스트
message1.addEmoji("wow", member1.id);
console.log(messages);

// (5) 1번 메시지에 이미 있는 이모지가 추가되는 테스트
message1.addEmoji("hi", member1.id);
console.log(messages);

// (6) 2번 메시지에 이모지가 새로 추가되는 세트스
message2.addEmoji("nice", member1.id);
console.log(messages);
