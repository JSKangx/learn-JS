"use strict";

const numNode = document.getElementById("num");
const resultNode = document.getElementById("result");

function sum() {
  // 합계를 구하는 로직을 백엔드에서 불러온다.
  /* 
    서버에 로직을 불러오는 요청을 '비동기(ajax)'로 진행하는 이유
    (1) 결과 획득까지 대기상태가 되지 않게하고 싶다.
    (2) 서버 응답에 의해 화면 전체가 refresh 되지 않게 하고, 필요한 부분의 화면만 업데이트 하고 싶다.
  */
  // xhr 생성
  let xhr = new XMLHttpRequest();
  // 요청 정보 설정(초기화)
  // xhr.open(request method, url, 비동기(T)/동기(F))
  // /sum/은 API 엔드포인트 경로다. 서버에서 "sum"이라는 작업을 처리할 수 있는 엔드포인트를 의미함.
  xhr.open("get", `http://localhost:3000/sum/${numNode.value}`, true);
  // 서버에 요청
  xhr.send();
  // 결과데이터를 받기 위한 콜백 함수 설정
  xhr.onload = function () {
    // 200 : 서버에서 제대로 데이터가 넘어왔다면(OK)
    if (xhr.status === 200) {
      // 서버에서 넘어오는 데이터는 모두 문자열(일반, JSON, xml)이다.
      let data = JSON.parse(xhr.responseText); // 이 경우에는 JSON 문자열이므로 파싱해서 JS 객체로 만듬
      // JSON 데이터를 파싱해서 JS 객체로 만들고 보니, 정답은 result 프로퍼티의 값에 저장되어 있기에 data.result를 얻어왔다.
      resultNode.innerHTML = data.result;
    }
  };
}
