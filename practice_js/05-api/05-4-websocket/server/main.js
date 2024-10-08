// ws라는 모듈을 사용하겠다고 선언.
const { WebSocketServer } = require("ws");

// 웹소켓 서버 생성 (포트번호 3000번을 쓴다.)
const sockserver = new WebSocketServer({ port: 3000 });
// 서버가 구동되면 서버사이드에 로그를 찍어준다.
console.log("socket server 구동 : 3000");

let msgId = 0;

// 연결 요청이 들어왔을 때 이벤트리스너
sockserver.on("connection", (ws) => {
  console.log("New client connected!");
  // 연결요청한 클라이언트에게 보내는 데이터(메시지)
  ws.send(
    JSON.stringify({
      gubun: "connect",
      msg: "서버와 접속에 성공했습니다.!",
      state: "ok",
    })
  );
  // 연결 닫았을 때 로그 찍기
  ws.on("close", () => console.log("Client has disconnected!"));
  // 클라이언트가 서버에게 메시지 전달했을 때
  ws.on("message", (data) => {
    let receiveObj = JSON.parse(data);
    if (receiveObj.gubun == "msg") {
      receiveObj.msgId = ++msgId;
    }
    let sendStr = JSON.stringify(receiveObj);
    // 현재 연결되어 있는 모든 클라이언트에게
    sockserver.clients.forEach((client) => {
      console.log(`send message: ${sendStr}`);
      // 받은 메시지를 전송
      client.send(`${sendStr}`);
    });
  });
  ws.onerror = function () {
    console.log("websocket error");
  };
});
