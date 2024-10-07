"use strict";

// 화면을 출력하는 함수
function printResult(result) {
  const resultDom = document.getElementById("result");
  resultDom.innerHTML = result;
}

// 버튼 이벤트 함수
// (1) 기본
function axios_basic() {
  const num = document.getElementById("num").value;
  // axios는 자동으로 Promise를 반환한다.
  axios({
    method: "get",
    // get 방식에서는 서버로 전달하는 데이터를 url에 포함시켜 보낸다.
    url: `http://localhost:3000/sum/${num}`,
  })
    // 따로 Promise로 감싸줄 필요 없이 바로 then을 쓰면 된다.
    .then((response) => {
      printResult(response.data.result);
    });
}

// (2) get 방식 요청
function axios_get() {
  const num = document.getElementById("num").value;
  axios.get(`http://localhost:3000/sum/${num}`).then((response) => {
    printResult(response.data.result);
  });
}

// (3) post 방식 요청 : request body에 데이터를 추가해서 서버에 전달하겠다.
function axios_post() {
  // post 방식 요청할 때, 서버 개발자가 post_test라는 url로 요청하라고 정해두었기 때문에 그대로 사용. 2번째 매개변수에 들어가는 정보가 body 데이터다.
  axios
    .post(`http://localhost:3000/post_test/`, {
      name: "홍길동",
      age: 20,
    })
    .then((response) => {
      // data.msg는 'post request success'라는 서버개발자가 정해놓은 메시지다.
      // 정보를 가져오는 게 아니라, 클라이언트 사이드가 보낸 정보를 서버에 저장했기 때문에, 성공했다는 메시지만 화면에 출력했다.
      printResult(response.data.msg);
    });
}
