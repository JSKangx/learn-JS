"use strict";

// 화면을 출력하는 함수
function printResult(result) {
  const resultDom = document.getElementById("result");
  resultDom.innerHTML = result;
}

// axios로 서버 연동시 공통적인 config 설정을 작성한다.
function axios_default() {
  axios.defaults.baseURL = "http://localhost:3000/";
  axios.defaults.timeout = 2000;

  // default에 설정된 값을 그대로 이용하기에 많은 정보를 안 써줘도 된다.
  axios
    .post("post_test", {
      name: "Alberto",
      age: 20,
    })
    .then((response) => {
      printResult(response.data.msg);
    });
}
// 개발자가 커스텀 axios 객체를 만들 수 있다.
// 서버 통신 요청이 반복적으로 있는 업무가 여러개로 구분되는 경우
function axios_create() {
  // myAxios 객체를 통해 서버 요청하는 공통 config를 커스텀으로 설정
  const myAxios = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 2000,
  });
  myAxios
    .post("post_test", {
      name: "Alberto",
      age: 20,
    })
    .then((response) => {
      printResult(response.data.msg);
    });
}
// url 뒤에(header 정보) 데이터를 추가해서 서버로 전송하는 방식
// url은 필수 입력 정보이므로 [get, post, put, delete, patch] 등에 모두 가능한 데이터 전송 방식
function axios_params() {
  axios({
    method: "get",
    url: "http://localhost:3000/get_test",
    // 서버에 전달하는 데이터. 이게 url에 추가된다.
    params: {
      data1: "hello",
      data2: 10,
    },
    // http://localhost:3000/get_test?data1=hello&data2=10
  }).then((response) => {
    printResult(response.data.msg);
  });
}
//
function axios_transform() {
  axios({
    method: "post",
    url: "http://localhost:3000/post_test",
    // data 정보는 body stream을 통해 전송되기에 url에는 표시되지 않는다.
    // body stream을 가지고 있는 post, put, patch에서만 사용 가능.
    data: {
      name: "Betty",
      age: 30,
    },
    // 요청시 실행되어야 할 함수가 있다면 이 배열의 원소로 담아주면 된다.
    transformRequest: [
      // 1번 매개변수(data) : 서버에 전송해야 할 body stream의 정보를 이 함수로 조작 가능
      // 2번 매개변수(headers) : 서버에 요청하는 header 정보를 전송시 이 함수로 조작 가능
      function (data, headers) {
        console.log(data);
        console.log(headers);
        // 아래처럼 임의의 header 정보를 추가할 수 있다.
        headers["Content-Type"] = "application/json";
        // 전송되는 기존 데이터를 쭉 나열한 후, 'key: 1'이라는 데이터를 추가하여 서버로 전송.
        let newData = { ...data, key: 1 };
        // return 시키는 값 : 서버로 최종 전송되는 값
        return JSON.stringify(newData);
      },
    ],
    // 서버로부터 응답을 받을 때 이 함수를 거쳐 데이터를 조작하여 받아줘.
    transformResponse: [
      // 매개변수 : 서버에서 받은 데이터
      function (data) {
        const jsonData = JSON.parse(data);
        // 서버에서 받은 데이터에 'index : 1'이라는 데이터를 추가해서 받아줘.
        let newData = { ...jsonData, index: 1 };
        return newData;
      },
    ],
  }).then((response) => {
    console.log(response.data); // {status: 200, msg: 'post request success', index: 1}
  });
}
