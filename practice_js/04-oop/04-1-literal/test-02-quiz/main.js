"use strict";

let message = {
  msg: "자바스크립트를 능숙하게 다룰 겁니다.",
  date: new Date().toLocaleString(),
  user: {
    profileImg: "user.png",
    nickname: "jsKang",
    id: "injnamek",
  },
  emojis: [
    {
      id: "thumbsUp",
      count: 3,
      members: ["member1", "member2", "member3"],
      addCount: function (id) {
        this.count++;
        this.members.push(id);
      },
    },
  ],
  addEmoji: function (emojiId, memberId) {
    if (this.emojis.every((emoji) => emoji.id !== emojiId)) {
      this.emojis.push({
        id: emojiId,
        count: 1,
        members: [memberId],
        addCount: function (id) {
          this.count++;
          this.members.push(id);
        },
      });
    } else {
      let index = this.emojis.findIndex((emoji) => emoji.id === emojiId);
      this.emojis[index].addCount(memberId);
    }
  },
};
