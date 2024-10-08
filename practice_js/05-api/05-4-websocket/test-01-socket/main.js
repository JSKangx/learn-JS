"use strict";

// 여러 함수에서 사용되어야 하는 변수이기에 전역에 먼저 선언함.
// 함수 안에서 재할당하여 값을 변경할 예정.
let webSocket;
let nickname;
let resultNode;
let msgNode;

// 닉네임을 입력한 후 연결(connect) 버튼을 누르면 실행될 함수
function connection() {
  // 유저가 입력한 닉네임 인풋 노드를 획득한다.
  let nicknameNode = document.getElementById("nickname");
  // 서버와 주고 받았던 메시지를 출력할 ul 태그 노드를 획득(기본 : hidden)
  resultNode = document.getElementById("results");
  // 로그인 후 입력할 인풋 노드 획득
  msgNode = document.getElementById("msg");
  // 유저 입력 닉네임을 nickname 변수에 할당
  nickname = nicknameNode.value.trim();

  // connect 버튼을 눌렀는데 닉네임이 입력된 게 있다면
  if (nickname) {
    // 새 웹소켓 객체 생성 (리얼 타임 푸시를 위해)
    webSocket = new WebSocket("ws://localhost:3000");

    // 닉네임 입력 부분은 안 보이게 하고, 메시지 입력 부분이 보이게 하기 위해 아래 3개의 노드를 획득한다.
    // 닉네임 입력 태그가 다 들어 있는 div 노드를 획득
    let connectNode = document.getElementById("connectDiv");
    // 메시지 입력 태그가 다 들어 있는 div 노드를 획득
    let msgNode = document.getElementById("msgDiv");
    // 메시지 입력 div 안에 닉네임을 출력할 span 노드 획득
    let nicknameResultNode = document.getElementById("nicknameResult");

    // 메시지 입력은 보이게
    msgNode.removeAttribute("class");
    // 닉네임 입력은 안 보이게
    connectNode.setAttribute("class", "hidden");
    // 입력한 닉네임을 span 태그의 innerHTML로 출력한다.
    nicknameResultNode.innerHTML = nickname;
  } else {
    // connect 버튼이 눌렸는데 닉네임이 입력된 게 없다면
    alert("nickname을 입력해주세요");
  }

  // 닉네임을 입력하는 칸은 비워준다.
  nicknameNode.value = "";

  /* 
    서버에서 데이터 들어올 때의 이벤트 리스너
    realtime server push는 연결된 상태에서만, 즉, connect 버튼을 누른 상태에서만 동작하기에, connection 함수 안에 작성해주는 것.
  */
  webSocket.onmessage = (event) => {
    // 메시지는 한번에 만들어지는 것이 아니라 계속 만들어지는 것이기에 템플릿 리터럴을 사용하기 보다, 메시지가 들어올 때마다 노드를 생성하느 방식이 더 적절하다(createElement).
    // 메시지가 넘어오면 li태그를 생성하고
    let liNode = document.createElement("li");

    // 서버에서 넘어오는 데이터가 json 문자열 데이터이기 때문에 파싱해줌.
    // 여기서 넘어오는 데이터는 ws.on('message') 이벤트에 작성된 데이터다. 다른 유저가 서버로 메시지를 보냈을 때 서버가 모든 유저에게 메시지를 보내는데, 그 메시지(데이터)를 의미하는 것이다.
    // onmessage 상황에서 발생된 event 객체의 data에 접근하여, 변수에 할당.
    let jsonData = JSON.parse(event.data);
    // li 태그의 안쪽을 채워준다. 3항 연산자로.
    // 넘어온 데이터에 닉네임이 있다면, '닉네임 => 메시지' 형식으로 표시, 만약 닉네임이 없다면, 그냥 '메시지'만 표시.
    // 그냥 '메시지'만 표시하는 경우는 서버가 접속 성공시에도 클라이언트에게 접속 성공 메시지를 보내기 때문이다.
    liNode.innerHTML = jsonData.nickname ? `${jsonData.nickname} => ${jsonData.msg}` : `${jsonData.msg}`;
    // 완성된 li 노드(메시지)를 ul에 삽입
    resultNode.appendChild(liNode);
  };
}

// 유저가 메시지를 입력하고 send 버튼을 눌렀을 때 실행될 함수
function send() {
  // 유저가 입력한 메시지 값.trim()한 문자열을 msg 변수에 할당.
  let msg = msgNode.value.trim();
  // 만약 유저가 msg를 잘 입력했다면
  if (msg) {
    // 새롭게 생성된 웹소켓 객체를 통해 서버에 데이터를 전송
    webSocket.send(
      // 전송될 데이터는 객체이기에, json 문자열로 변형해서 전송
      // 들어갈 정보 : 닉네임, 메시지
      JSON.stringify({
        // nickname : nickname의 축약형
        nickname, // 전역에 선언된 nickname 변수. 유저가 처음 입력한 것.
        msg, // 방금 입력한 메시지(문자열)
      })
    );
    msgNode.value = "";
    // li 노드를 만들어서
    // let liNode = document.createElement("li");
    // // 내부를 '닉네임 => 메시지' 형식으로 채우고
    // liNode.innerHTML = `${nickname} => ${msg}`;
    // // 자신의 창에 대화 ul(results)에 삽입. 이건 안 해도 된다. 어차피 서버가 접속한 모든 클라이언트에게 메시지를 재전송해준다.
    // resultNode.appendChild(liNode);
  } else {
    // 메시지가 입력이 안 됐다면 경고창 띄우기.
    alert("메시지를 입력해주세요.");
  }
}
