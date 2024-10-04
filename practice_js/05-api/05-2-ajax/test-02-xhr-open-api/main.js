"use strict";

let button = document.getElementById("button");
let table = document.getElementById("result");

button.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  // 요청할 정보 입력
  xhr.open("get", "http://openapi.seoul.go.kr:8088/67436a4547696e6a33344d4e50434e/json/RealtimeCityAir/1/99/", true);
  // 결과가 넘어올 때 실행할 함수 정의
  xhr.onload = function () {
    // 서버에서 받은 json 문자열을 변수에 할당
    let result = xhr.responseText;
    // 받은 json 문자열을 파싱하여 자바스크립트 객체로 변환
    let resultObj = JSON.parse(result);
    // 필요한 데이터만 추출한다. (지역구, 미세먼지 수치, 미세먼지 등급)
    /* 
      객체 멤버에 접근할 때 . 표기법은 프로퍼티 키가 유효한 자바스크립트 식별자일 때 사용한다.
      API 응답의 JSON 데이터에서는 키가 일반적인 자바스크립트 식별자 규칙을 따르지 않을 가능성이 있다. 이런 경우에 객체의 멤버에 접근할 때 대괄호 표기법을 사용한다.
    */
    let rows = resultObj["RealtimeCityAir"]["row"];
    let resultTxt = "";
    for (let i = 0; i < rows.length; i++) {
      let name = rows[i]["MSRSTE_NM"];
      let value = rows[i]["IDEX_MVL"];
      let grade = rows[i]["IDEX_NM"];

      resultTxt += `
        <tr>
          <td>${name}</td>
          <td>${value}</td>
          <td>${grade}</td>
        </tr>
      `;
    }
    table.innerHTML = resultTxt;
  };
  // 데이터 요청 보내기
  xhr.send();
});
