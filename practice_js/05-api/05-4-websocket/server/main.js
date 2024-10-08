// ws라는 모듈을 사용하겠다고 선언.
const { WebSocketServer } = require("ws");

// 웹소켓 서버 생성 (포트번호 3000번을 쓴다.)
const sockserver = new WebSocketServer({ port: 3000 });
// 서버가 구동되면 서버사이드에 로그를 찍어준다.
console.log("socket server 구동 : 3000");

let msgId = 0;

// 연결 요청이 들어왔을 때 이벤트리스너
// 연결되었을 때, ws객체가 생성되는데 이것은 연결된 유저의 웹소켓 객체를 의미하는 것이다.
sockserver.on("connection", (ws) => {
  // 서버에 찍는 로그
  console.log("New client connected!");
  // 연결요청한 클라이언트에게 보내는 데이터(메시지)
  ws.send(
    JSON.stringify({
      gubun: "connect",
      msg: "서버와 접속에 성공했습니다!",
      state: "ok",
    })
  );
  // 연결 끊겼을 때 로그 찍기(서버 사이드)
  ws.on("close", () => console.log("Client has disconnected!"));
  // 클라이언트가 서버에게 데이터를 전달했을 때
  ws.on("message", (data) => {
    // 클라이언트가 보낸 메시지를 파싱하고, receiveObj에 할당
    let receiveObj = JSON.parse(data);
    // 이 메시지에 담긴 gubun 프로퍼티의 값이 'msg라면
    if (receiveObj.gubun == "msg") {
      // receiveobj의 메시지 아이디를 1 증가시켜.
      receiveObj.msgId = ++msgId;
    }
    // 받은 메시지 객체를 json 문자열로 바꿔서 변수에 할당하고,
    let sendStr = JSON.stringify(receiveObj);
    // 현재 연결되어 있는 모든 클라이언트의 개수만큼
    sockserver.clients.forEach((client) => {
      // 서버쪽에서는 로그를 찍고
      console.log(`send message: ${sendStr}`);
      // 클라이언트 각각에게 받은 메시지를 그대로 전송
      client.send(`${sendStr}`);
    });
  });
  // 에러가 발생했을 때 실행될 콜백 함수
  ws.onerror = function () {
    console.log("websocket error");
  };
});
