"use strict";

/*
  1. 기존 만든 객체에서 반복적으로 생성될 객체가 무엇인지 판단.
  2. 객체가 가지는 데이터를 생성자 함수 내에서 만들어야 하는가, 외부에서 전달받아야 하는가?
    2-1. 내부에서 만들어야 한다 : 생성자 내의 함수
    2-2. 외부에서 받아야 한다 : 매개변수
  3. 역할별로 함수를 따로 만든다.
*/

// 유저의 정보를 객체로 생성하는 생성자 함수.
function Member(id, nickname, profileImg) {
  this.id = id;
  this.nickname = nickname;
  this.profileImg = profileImg;
}

// 이모지의 정보를 객체로 생성하는 생성자 함수.
// 이 생성자 함수는 직접 생성하지 않고, 메시지 객체에 이모지가 추가될 때, 이모지 추가 함수 안에서 호출된다.
function Emoji(id) {
  this.emojiId = id;
  this.count = 0;
  this.members = []; // 이 이모지를 누른 사람의 id
  // 이모지 카운트 추가 및 누른 사람 추가 함수
  this.add = function (memberId) {
    this.count++;
    this.members.push(memberId);
  };
}

// 채팅글의 정보를 객체로 생성하는 생성자 함수
function Message(msg, member) {
  // 메시지가 생성될 때마다 메시지를 식별하기 위한 id 값을 1씩 증가시킴.
  this.msgId = ++msgId;
  this.msg = msg;
  this.member = member;
  // Message 객체가 생성될 때의 시간 데이터가 저장된다.
  this.date = new Date().toLocaleString();
  // 이 메시지에 달린 이모지가 무엇인지 보여주는 배열. 여기엔 Emoji 생성자 함수로 생성된 이모지 객체가 원소로 저장된다.
  this.emojis = [];
  // 이 메시지에 이모지를 추가하는 메서드
  // 이모지를 추가할 때는 이모지의 종류(emojiId)와 이모지를 누른 사람(memberId) 정보가 필요하다.
  this.addEmoji = function (emojiId, memberId) {
    // emojis 배열의 모든 원소에 대해,
    if (this.emojis.every((item) => item.emojiId !== emojiId)) {
      // emojis 배열의 원소의 id가 새로 추가하는 emojiId와 같지 않다면, 즉, 기존에 있던 이모지가 아니라면, 새로운 이모지 객체를 생성해줘
      let emoji = new Emoji(emojiId);
      // 새로 생성된 이모지 객체에 카운트를 올려주고, 이모지를 누른 멤버의 아이디 정보를 추가해줘.
      emoji.add(memberId);
      // 새로 생성된 이모지 객체를, emojis 배열에 추가해줘.
      this.emojis.push(emoji);
    }
    // 기존에 추가되어 있던 이모지라면, 실행해야 할 코드
    else {
      // emojis 배열에 있는 모든 원소에 대하여, 원소의 emojiId가 새로 추가하는 emojiId와 같은 것의 인덱스를 찾아서 index라는 변수에 할당
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId);
      // 해당 원소(이모지 객체)에 대해 .add 메서드(카운트 증가, 멤버 아이디 정보 추가) 실행해줘.
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
