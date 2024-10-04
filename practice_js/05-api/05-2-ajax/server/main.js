//단순 ajax 테스트

const express = require("express");
const bodyParser = require("body-parser");

//마지막에 추가해서 테스트
const cors = require("cors");

const app = express();

/* 
  지금 테스트 구조에서 front app의 origin은 'http://127.0.0.1:5500/05-2-ajax/test-01-xhr/index.html'이다.
  그러나 back-end의 origin은 `http://localhost:3000/sum/${numNode.value}`이라서, 이 구조에서는 CORS 문제가 발생한다.
  CORS 문제 해결을 위해 back-end에서 response header에 크로스 오리진 허용을 해줬다.
*/
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

function sum(request, response, next) {
  console.log("sum..");

  // 아래 두 코드도 app.use(cors())와 같이 '크로스 오리진 허용'해주는 코드다.
  // response.setHeader('Access-Control-Allow-Origin', '*');
  // response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

  // 요청 url에 있는 no 정보를 획득
  let no = request.params.no;
  let result = 0;
  for (let i = 1; i <= no; i++) {
    result += i;
  }

  // response.setHeader("Content-Type", "text/plain;charset=utf-8");
  // 결과를 'json 데이터'로 client side로 보낸다.
  response.json({ status: 200, result: result });
}

// 클라이언트의 request가 /sum/:no로 들어온다면, sum 함수를 실행시켜라.
app.get("/sum/:no", sum);

app.post("/post_test", (request, response, next) => {
  console.log(request.body);
  response.json({ status: 200, msg: "post request success" });
});
app.get("/get_test", (request, response, next) => {
  console.log(request.query);
  response.json({ status: 200, msg: "get_test request success" });
});

app.get("/text_test", (request, response, next) => {
  console.log(`text_test, ${request.headers["accept"]}`);
  response.send("text_test request success");
});

app.listen(PORT, () => {
  console.log(`1 listening at http://localhost:${PORT}`);
});
