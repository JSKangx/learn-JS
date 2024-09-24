"use strict";

/*
  1. 기존 만든 객체에서 반복적으로 생성될 객체가 무엇인지 판단.
  2. 객체가 가지는 데이터를 생성자 함수 내에서 만들어야 하는가, 외부에서 전달받아야 하는가?
    2-1. 내부에서 만들어야 한다 : 생성자 내의 함수
    2-2. 외부에서 받아야 한다 : 매개변수
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
    // emoji 배열의 모든 원소에 대해,
    if (this.emojis.every((item) => item.emojiId !== emojiId)) {
      // 모든 이모지의 id가 새로 추가하는 emojiId와 같지 않다면, 즉, 원래 추가된 이모지가 아니라면, 새로운 이모지를 추가해줘
      let emoji = new Emoji(emojiId);
      emoji.add(memberId);
      this.emojis.push(emoji);
    } else {
      // 기존에 추가되어 있던 이모지라면,
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId);
      this.emojis[index].add(memberId);
    }
  };
}

// 전체 메시지를 담기 위한 배열
let messages = [];

// 메시지 식별자로 사용하기 위한 변수 선언. 메시지 객체가 만들어질 때마다 1씩 증가.
let msgId = 0;

// 신규 메시지 발생 test
let member1 = new Member("Kim", "김길동", "Kim.png");
let message1 = new Message("첫번째 메시지", member1);
messages.push(message1);
console.dir(messages);

// 신규 메시지 발생 test 2
let member2 = new Member("Lee", "이길동", "Lee.png");
let message2 = new Message("두 번째 메시지", member2);
messages.push(message2);
console.dir(messages);

// Park이 첫번째 메시지에 ok 이모지를 추가했다는 test
message1.addEmoji("ok", "Park");
console.dir(messages);

// Choi가 첫 번째 메시지에 thumbsup 이모지 추가했다는 test
message1.addEmoji("thumbsup", "Choi");
console.dir(messages);

// Jung이 첫 번째 메시지에 ok 이모지 추가했다는 test
message1.addEmoji("ok", "Jung");
console.dir(messages);
