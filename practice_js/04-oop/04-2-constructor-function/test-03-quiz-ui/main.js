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
  this.emojiId = id;
  this.count = 0;
  this.members = [];
  this.add = function (memberId) {
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
// 퍼블리셔가 준 html 파일을 보면서 그대로 출력되도록 코드 작성하면 됨
function printMessage(message) {
  // 노드 트리 구조에서 가장 하위인 dropdown 메뉴 준비
  let menuImageNode = document.createElement("img");
  menuImageNode.setAttribute("src", "images/menu.jpg");

  // 그 다음 구조인 button 만들기
  let menuButton = document.createElement("button");
  // 퍼블리셔가 설정한 class 명을 그대로 부여
  menuButton.setAttribute("class", "msg-info-menu dropbtn");
  // img를 버튼 안에 넣어주기
  menuButton.appendChild(menuImageNode);

  // 다른 하위인 a 태그 만들기
  let link1 = document.createElement("a");
  link1.setAttribute("href", "#"); // 속성 부여
  // 이벤트 함수도 속성이다.
  // 함수의 매개변수는 동적으로 들어가야 하기에 템플릿 리터럴
  // 동적으로 들어가는 데이터는 생성된 개별 메시지 객체의 아이디다.
  // 이 message 라는 단어는 printMessage 함수의 매개변수로 들어온 것인데, printMessage 함수는 send 함수에서 생성된 message 객체를 매개변수로 넣어 호출된다.
  link1.setAttribute("onclick", `emojiClick('${message.msgId}','thumbup')`);
  let link1Text = document.createTextNode("좋아요");
  link1.appendChild(link1Text);

  // 또 다른 a 태그 만들기
  let link2 = document.createElement("a");
  link2.setAttribute("href", "#");
  link2.setAttribute("onclick", `emojiClick('${message.msgId}','ok')`);
  let link2Text = document.createTextNode("넵");
  link2.appendChild(link2Text);

  // a 태그 2개가 div로 묶여야 한다.
  let links = document.createElement("div");
  links.setAttribute("class", "dropdown-content");
  links.appendChild(link1);
  links.appendChild(link2);

  // 드롭다운 버튼과 드롭다운 컨텐츠를 하나의 div로 묶어야 한다.
  let dropdown = document.createElement("div");
  dropdown.setAttribute("class", "dropdown");
  dropdown.appendChild(menuButton);
  dropdown.appendChild(links);

  // main data 만들기
  // 사람 이름 나오는 부분
  let name = document.createElement("div");
  name.setAttribute("class", "msg-info-name");
  name.appendChild(document.createTextNode(message.member.nickname));
  // 메시지 쓴 date 나오는 부분
  let date = document.createElement("div");
  name.setAttribute("class", "msg-info-time");
  name.appendChild(document.createTextNode(message.date));

  // 지금까지 만든걸 div.msg-info로 묶어야 한다.
  let msgInfo = document.createElement("div");
  msgInfo.setAttribute("class", "msg-info");
  msgInfo.appendChild(name);
  msgInfo.appendChild(date);
  msgInfo.appendChild(dropdown);

  // msg text 만들기
  let msgText = document.createElement("div");
  msgText.setAttribute("class", "msg-text");
  msgText.appendChild(document.createTextNode(message.msg));

  // div.msg-bubble을 만들고 지금까지 만든걸 삽입
  let msgBubble = document.createElement("div");
  msgBubble.setAttribute("class", "msg-bubble");
  msgBubble.appendChild(msgInfo);
  msgBubble.appendChild(msgText);

  // 프로필 이미지 노드 만들기
  let photoNode = document.createElement("img");
  photoNode.setAttribute("src", message.member.profileImg);
  photoNode.setAttribute("class", "msg-img");

  /* 
    생성된 메시지 객체를 div 태그로 출력해보자.
    화면에 메시지 객체는 여러개 추가된다.
    각 div 태그를 id로 식별해야 나중에 원하는 메시지에 이모지 추가할 수 있다.
  */
  let mainNode = document.createElement("div");
  mainNode.setAttribute("id", `msgId-${message.msgId}`);
  mainNode.setAttribute("class", "msg left-msg");
  // 여기에 지금까지 만든걸 삽입하자.
  mainNode.appendChild(photoNode);
  mainNode.appendChild(msgBubble);

  // 이걸 최종 main.msger-chat에 삽입하자
  chatMainNode.appendChild(mainNode);
}

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
  } // 유저 입력이 유효한 경우
  else {
    // 유저 입력 input 칸 비워주기
    idInputNode.value = "";
    nicknameInputNode.value = "";
    msgInputNode.value = "";

    // 메시지 입력 유저를 표현하는 객체 생성
    // 프로필 이미지는 유저 id와 동일한 파일명으로 임의 설정하자.
    let member = new Member(id, nickname, `images/${id}.jpg`);

    // 메시지 객체 생성
    let message = new Message(msg, member);
    // 생성된 메시지 객체를 메시지의 모음인 messages 배열의 원소로 추가
    messages.push(message);

    // 메시지를 화면에 출력
    printMessage(message);
  }

  // 화면에 동적 노드 만들어서 출력

  //
}

//
function printEmoji(message) {
  // 하나의 메시지에 이모지는 여러개일 수도 있다.
  // message.emojis는 message 객체에 추가된 emoji가 모여있는 배열이다.
  let emojis = message.emojis;
  // emojis 배열에 원소가 1개라도 있는 경우에만 코드 실행
  if (emojis.length > 0) {
    // 이모지가 출력되어야 하는 노드를 획득
    // 자기가 속해 있는 노드를 얻어야 한다.
    let messageBubble = document.querySelector(`#msgId-${message.msgId} .msg-bubble`);
    // 이모지가 추가된 것이 있을 수도 있고 없을 수도 있다.
    /* 
      만약 있다면 마크업에 div.emojis가 이미 생성되었기에 내부만 만들면 됨.
      없다면, div.emojis를 생성해야 함.
    */
    let emojiNode = messageBubble.querySelector(".emojis");
    // emojiNode 가 있다면 (기존에 이모지 추가된 것이 있는 상황)
    if (emojiNode) {
      // 새로 찍어내기 위해 그냥 전체 리셋
      messageBubble.removeChild(emojiNode);
    }
    // 있든 없든 실행
    let emojisNode = document.createElement("div");
    emojisNode.setAttribute("class", "emojis");
    emojis.forEach((emoji) => {
      let img = document.createElement("img");
      img.setAttribute("class", "emoji dropbtn");
      img.setAttribute("src", `images/${emoji.emojiId}.jpg`);
      let span = document.createElement("span");
      // members 배열의 원소를 ,로 구분해서 문자열로 만듬
      let nicknameText = emoji.members.join(", ");
      span.appendChild(document.createTextNode(nicknameText));

      // span을 div.dropdown-content에 넣자.
      let dropdownContent = document.createElement("div");
      dropdownContent.setAttribute("class", "dropdown-content");
      dropdownContent.appendChild(span);

      // div.dropdown에 위 두 가지를 넣자.
      let dropdown = document.createElement("div");
      dropdown.setAttribute("class", "dropdown");
      dropdown.appendChild(img);
      dropdown.appendChild(dropdownContent);

      // span.emoji-count를 만들자.
      let span2 = document.createElement("span");
      span2.setAttribute("class", "emoji-count");
      span2.appendChild(document.createTextNode(`${emoji.count}`));

      // div.emojis에 위 두가지를 넣자
      emojisNode.appendChild(dropdown);
      emojisNode.appendChild(span2);
    });
    // 이렇게 만든 애가 버블에 붙도록 삽입.
    messageBubble.appendChild(emojisNode);
  }
}

// 이모지 추가 이벤트 처리하는 함수
function emojiClick(msgId, emojiId) {
  // 이모지를 동적으로 메시지에 출력하는 기능.
  /*
    서버와 연동된다면 이모지 출력의 유저 id는 고정되지만,
    지금은 로컬 테스트이기에 이모지 추가 유저 id를 prompt로 받아들인다.
  */
  let memberId = prompt("멤버 ID를 입력해주세요.");
  if (memberId == null) {
    alert("입력을 하지 않았습니다.");
  } else {
    // 어느 메시지에서 이모지를 클릭한 것인지를 msgId로 식별해야 한다.
    // msgId로 배열에서 이모지를 추가하고자 하는 메시지 객체를 찾는다.
    let index = messages.findIndex((item) => item.msgId == msgId);
    messages[index].addEmoji(emojiId, memberId);

    // 추가한 이모지를 화면에 출력
    printEmoji(messages[index]);
  }
}
