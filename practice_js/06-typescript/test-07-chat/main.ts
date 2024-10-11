// ts로 작성했을 때 js로 트랜스파일 될 때 엄격모드가 자동으로 적용된다.

// 생성자에 접근제한자를 붙였기 때문에 매개변수가 클래스 멤버 변수(this.멤버)가 되었다.
class Member {
  constructor(
    public id: string,
    public nickname: string,
    public profileImg: string
  ) {}
}

class Emoji {
  // 생성자 함수로 초기화하는 것은 아래와 같이,
  constructor(public emojiId: string) {}
  // 그냥 멤버는 생성자 밖에 선언하면 됨.
  count: number = 0;
  members: Array<string> = [];
  add(memberId: string) {
    this.count++;
    this.members.push(memberId);
  }
}

class Message {
  constructor(public msg: string, public member: Member) {}
  msgId: number = 0;
  date: string = new Date().toLocaleString();
  emojis: Array<Emoji> = [];
  addEmoji(emojiId: string, memberId: string) {
    if (this.emojis.every((item) => item.emojiId !== emojiId)) {
      let emoji = new Emoji(emojiId);
      emoji.add(memberId);
      this.emojis.push(emoji);
    } else {
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId);
      this.emojis[index].add(memberId);
    }
  }
}

// 이모지를 추가할 때 필요한 배열
// 타입 유추를 통해 배열이라는 걸 알긴 하겠지만, 정확히 지정해주는 게 좋다.
let messages: Array<Message> = [];
// connect 시에 값 할당할 변수 미리 선언
let member: Member; // 클라이언트 정보. 현재 창을 이용하는 멤버 정보.
let webSocket: WebSocket; // 서버 연결 정보

// DOM 노드의 기본 타입은 HTML Element라는 클래스의 객체타입임.
// input 태그의 노드 객체의 경우, value로 입력값을 획득해야 하는데, HTML Element에는 value가 없다. HTML Element의 서브 클래스인 HTMLInputElement로 사용해야 한다.
// document.getElementById() 메서드는 HTML Element 타입의 객체를 반환한다. 이 타입을 as 예약어로 타입을 변형시켜서 사용해야 한다.
let nicknameInputNode: HTMLInputElement = document.getElementById(
  "nicknameInput"
) as HTMLInputElement;
let idInputNode: HTMLInputElement = document.getElementById(
  "idInput"
) as HTMLInputElement;
let msgInputNode: HTMLInputElement = document.getElementById(
  "msgInput"
) as HTMLInputElement;

let chatMainNode: HTMLElement | null = document.getElementById("chat-main");
let connectForm: HTMLElement | null = document.getElementById("connectForm");
let msgForm: HTMLElement | null = document.getElementById("msgForm");

function printMessage(message: Message) {
  // HTMLElement를 안 줘도 유추하기 때문에, 굳이 안 줘도 되긴 한다. 그런데 학습 차원이기 때문에 그냥 다 넣어준다.
  let menuImageNode: HTMLElement = document.createElement("img");
  menuImageNode.setAttribute("src", "images/menu.jpg");
  let menuButton: HTMLElement = document.createElement("button");
  menuButton.setAttribute("class", "msg-info-menu dropbtn");
  menuButton.appendChild(menuImageNode);

  let link1: HTMLElement = document.createElement("a");
  link1.setAttribute("href", "#");
  link1.setAttribute("onclick", `emojiClick('${message.msgId}','thumbup')`);
  let link1Text = document.createTextNode("좋아요");
  link1.appendChild(link1Text);

  let link2: HTMLElement = document.createElement("a");
  link2.setAttribute("href", "#");
  link2.setAttribute("onclick", `emojiClick('${message.msgId}','ok')`);
  let link2Text = document.createTextNode("넵");
  link2.appendChild(link2Text);

  let links: HTMLElement = document.createElement("div");
  links.setAttribute("class", "dropdown-content");
  links.appendChild(link1);
  links.appendChild(link2);

  let dropdown: HTMLElement = document.createElement("div");
  dropdown.setAttribute("class", "dropdown");
  dropdown.appendChild(menuButton);
  dropdown.appendChild(links);

  let name: HTMLElement = document.createElement("div");
  name.setAttribute("class", "msg-info-name");
  name.appendChild(document.createTextNode(message.member.nickname));
  let date: HTMLElement = document.createElement("div");
  date.setAttribute("class", "msg-info-time");
  date.appendChild(document.createTextNode(message.date));

  let msgInfo: HTMLElement = document.createElement("div");
  msgInfo.setAttribute("class", "msg-info");
  msgInfo.appendChild(name);
  msgInfo.appendChild(date);
  msgInfo.appendChild(dropdown);

  let msgText: HTMLElement = document.createElement("div");
  msgText.setAttribute("class", "msg-text");
  msgText.appendChild(document.createTextNode(message.msg));

  let msgBubble: HTMLElement = document.createElement("div");
  msgBubble.setAttribute("class", "msg-bubble");
  msgBubble.appendChild(msgInfo);
  msgBubble.appendChild(msgText);

  let photoNode: HTMLElement = document.createElement("img");
  photoNode.setAttribute("src", message.member.profileImg);
  photoNode.setAttribute("class", "msg-img");

  let mainNode: HTMLElement = document.createElement("div");
  mainNode.setAttribute("id", `msgId-${message.msgId}`);
  mainNode.setAttribute("class", "msg left-msg");
  mainNode.appendChild(photoNode);
  mainNode.appendChild(msgBubble);

  // 이건 위에 : HTMLElement | null로 선언되어 있다.
  // 이 객체에 정상적으로 객체가 대입될 수도 있지만, null일 수도 있다. null인 경우에 함수 호출하면 에러가 난다. 그래서 null이면 함수 호출이 안 되게 처리해 주어야 한다.
  // ?. : null이면 함수 호출하지 마라.
  chatMainNode?.appendChild(mainNode);
}

function connect(e: MouseEvent) {
  e.preventDefault();
  let id: string = idInputNode.value;
  let nickname: string = nicknameInputNode.value;
  if (id.trim().length === 0 || nickname.trim().length === 0) {
    alert("아이디와 닉네임을 입력하세요.");

    return;
  } else {
    idInputNode.value = "";
    nicknameInputNode.value = "";

    member = new Member(id, nickname, `images/${id}.jpg`);

    webSocket = new WebSocket("ws://localhost:3000");

    webSocket.onmessage = onMessage;
  }
}

function send(e: MouseEvent) {
  e.preventDefault();
  let msg: string = msgInputNode.value;

  if (msg.trim().length === 0) {
    alert("메시지를 입력해야 합니다.");
    return;
  } else {
    msgInputNode.value = "";

    let message: Message = new Message(msg, member);

    // 객체의 멤버를 외부에서 생성하는 데 에러가 난다. 원래있던 멤버는 .으로 접근 가능하지만, 새로운 멤버을 생성할 때는 [' '] 형식으로 해줘야 한다.
    message["gubun"] = "msg";

    webSocket.send(JSON.stringify(message));
  }
}

function printEmoji(message: Message) {
  let emojis: Array<Emoji> = message.emojis;
  if (emojis.length > 0) {
    // html element 타입일 것이지만, 획득이 안 될 수 있기에 null
    let messageBubble: HTMLElement | null = document.querySelector(
      `#msgId-${message.msgId} .msg-bubble`
    );

    let prevEmojiNode: HTMLElement | null | undefined =
      // null이면 에러나니까 ?해줌. null이면 접근하지 마.
      messageBubble?.querySelector(".emojis");
    if (prevEmojiNode) {
      messageBubble?.removeChild(prevEmojiNode);
    }
    let emojisNode: HTMLElement = document.createElement("div");
    emojisNode.setAttribute("class", "emojis");
    emojis.forEach((emoji) => {
      let img: HTMLElement = document.createElement("img");
      img.setAttribute("class", "emoji dropbtn");
      img.setAttribute("src", `images/${emoji.emojiId}.jpg`);

      let span: HTMLElement = document.createElement("span");
      let nicknameText = emoji.members.join(", ");
      span.appendChild(document.createTextNode(nicknameText));
      let dropdownContent: HTMLElement = document.createElement("div");
      dropdownContent.setAttribute("class", "dropdown-content");
      dropdownContent.appendChild(span);

      let dropdown: HTMLElement = document.createElement("div");
      dropdown.setAttribute("class", "dropdown");
      dropdown.appendChild(img);
      dropdown.appendChild(dropdownContent);

      let span2: HTMLElement = document.createElement("span");
      span2.setAttribute("class", "emoji-count");
      span2.appendChild(document.createTextNode(`${emoji.count}`));

      emojisNode.appendChild(dropdown);
      emojisNode.appendChild(span2);
    });
    messageBubble?.appendChild(emojisNode);
  }
}

// 이전에 이모지를 달려면 아이디를 입력해야했지만, 이제는 로그인 기능을 이용할 것이므로 기능이 달라져야 한다.
function emojiClick(msgId: number, emojiId: string) {
  let emoji: Emoji = new Emoji(emojiId);

  emoji["memberId"] = member.id;
  emoji["msgId"] = msgId;
  emoji["gubun"] = "emoji";

  webSocket.send(JSON.stringify(emoji));
}

function onMessage(event: MessageEvent) {
  // 서버에서 넘어온 데이터 타입을 지정하기 힘들 때는 이렇게 써줘도 된다.
  let serverData: any = JSON.parse(event.data);

  if (serverData.gubun === "connect") {
    if (serverData.state === "ok") {
      // 타입스크립트에서는 style값이 캡슐화 되어 있어서 함수로 이용해야 한다.
      connectForm?.setAttribute("style", "display: none");
      msgForm?.removeAttribute("style");
    } else {
      alert("서버 연결에 실패하였습니다.");
    }
  } else if (serverData.gubun === "msg") {
    // 생성되는 게 메시지니까 타입 지정 안 해줘도 유추한다.
    let message: Message = new Message(serverData.msg, serverData.member);
    message.msgId = serverData.msgId;
    messages.push(message);
    printMessage(message);
  } else if (serverData.gubun === "emoji") {
    let index: number = messages.findIndex(
      (item) => item.msgId === parseInt(serverData.msgId)
    );
    messages[index].addEmoji(serverData.emojiId, serverData.memberId);
    printEmoji(messages[index]);
  }
}
