"use strict";

function Message(msg, date, userId, userName, profileImg, emojiId, emojiCount, [...emojiMembers]) {
  this.msg = msg;
  this.date = date;
  this.user = {
    id: userId,
    nickname: userName,
    profileImg: profileImg,
  };
  (this.emoji = [
    {
      id: emojiId,
      count: emojiCount,
      members: emojiMembers,
      addCount: function (id) {
        this.count++;
        this.members.push(id);
      },
    },
  ]),
    (this.addEmoji = function (emojiId, memberId) {
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
    });
}
let user1 = new Message("hi", 1, 1, 1, 1, 1, 1, [1, 2]);
user1.addEmoji("hello", "kang");
user1.addEmoji("hello", "kim");
console.dir(user1);
