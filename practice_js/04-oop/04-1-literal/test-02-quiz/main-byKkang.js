"use strict";

/*
  객체 설계
  - 메시지를 보여주기 위해 설계한다.
  - 필요한 데이터가 뭘까?
    채팅 내용
    메시지 업로드 시각
    유저
      유저 프로필 이미지
      유저 닉네임
      유저 아이디 (닉네임에 마우스 오버 해야 나옴, 그러나 아이디는 유일한 것이기에 데이터로 관리하면 좋다.)
    이모지 (array)
      이모지 종류
      이모지 카운트
      이모지 클릭 멤버
        (함수) 이모지 클릭 멤버 추가 함수 
    (함수) 이모지 카운트 추가 함수
*/

let message = {
  msg: "디버깅 용도로 많이 사용합니다",
  date: "2024.09.04 오전 10:32",
  user: {
    id: "bamtol4432",
    nickname: "12. 장유진",
    profileImg: "jangyj.png",
  },
  // emoji와 emoji.members는 얼마나 더 추가될지 모르기에 배열로 구성.
  emoji: [
    {
      id: "thumbs_up",
      count: 3,
      members: ["jska2w3", "donghyanoh", "idoyeong5696"],
      addCount: function (id) {
        this.count++;
        this.members.push(id);
      },
    },
  ],
  addEmoji: function (emojiId, memberId) {
    // emoji 배열의 모든 원소에 대해,
    if (this.emoji.every((item) => item.id !== emojiId)) {
      // 모든 이모지의 id가 새로 추가하는 emojiId와 같지 않다면, 즉, 원래 추가된 이모지가 아니라면, 새로운 이모지를 추가해줘
      this.emoji.push({
        id: emojiId,
        count: 1,
        members: [memberId],
        addCount: function (id) {
          this.count++;
          this.members.push(id);
        },
      });
    } else {
      // 기존에 추가되어 있던 이모지라면,
      let index = this.emoji.findIndex((item) => item.id === emojiId);
      this.emoji[index].addCount(memberId);
    }
  },
};
