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

// 멤버 객체 생성자 함수
function Member(id, nickname, profileImg) {
  this.id = id;
  this.nickname = nickname;
  this.profilImg = profileImg;
}

// 이모지 객체 생성자 함수 (emojis 배열 안에 있는 하나의 객체를 생성함)
function Emoji(emojiId) {
  this.id = emojiId;
  this.count = 0;
  this.members = [];
  // emoji와 관련된 데이터만 조작하는 메서드이기에 emoji 객체 안에 정의함
  this.addCount = function (memberId) {
    this.count++;
    this.members.push(memberId);
  };
}

function Message(msg, member) {
  this.msgId = ++msgId;
  this.msg = msg;
  this.date = new Date().toLocaleString();
  this.member = member;
  this.emojis = [];
  this.addEmoji = function (emojiId, memberId) {
    // message 객체가 갖고 있는 이모지 중에 같은 이모지가 없다면,
    if (this.emojis.every((emoji) => emoji.id !== emojiId)) {
      // 새 이모지 객체를 생성하고,
      let emoji = new Emoji(emojiId);
      // 이모지 카운트를 증가시킨 다음에
      emoji.addCount(memberId);
      // 그 이모지 객체를 message 객체가 가진 emojis 배열에 push
      this.emojis.push(emoji);
    } else {
      let index = this.emojis.findIndex((emoji) => emoji.id === emojiId);
      this.emojis[index].addCount(memberId);
    }
  };
}

// test
// 모든 메시지를 담은 초기 배열을 선언
let messages = [];
// 생성된 message 객체를 구별하기 위해 순번을 부여함.
// 초기값은 0. message 객체가 생성될 때마다 1씩 증가하는 로직을 생성자 함수 안에 기록.
let msgId = 0;

// 신규 메시지 발생 1
let member1 = new Member("kim", "김길동", "kim.png");
let message1 = new Message("hihi", member1);
messages.push(message1);
console.dir(messages);

// 신규 메시지 발생 2
let member2 = new Member("Lee", "이길동", "lee.png");
let message2 = new Message("응 하이하이", member2);
messages.push(message2);
console.dir(messages);

// 이모지 추가 1
message1.addEmoji("hello", "이길동");

// 이모지 추가 2
message2.addEmoji("hello", "김길동");

// 같은 메시지에 다른 이모지 추가
message1.addEmoji("bye", "이길동");

// 같은 메시지에 같은 이모지 추가
message1.addEmoji("hello", "박길동");
