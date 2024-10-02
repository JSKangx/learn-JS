"use strict";

// 동기 실행
function myFun() {
  console.log("work done");
  return 10;
}
console.log("step1");
let result = myFun(); // 만약 이 줄이 오래 걸리는 함수라면 아랫줄 로그는 이 라인이 끝날 때까지 안 찍힌다.
console.log(`step2 + ${result}`);
/*
  step1
  work done
  step2 + 10
*/

// 비동기 실행함수 정의
function myFun2() {
  // 호출되자마자 Promise 객체를 리턴시켜서 호출한 곳이 대기상태가 되지 않게 한다.
  return new Promise((resolve, reject) => {
    // promise의 매개변수는 시간이 오래걸리는 업무를 처리하는 함수다.
    setTimeout(() => resolve(10), 1000); // 1초 후에 10이라는 데이터를 발생시킨다.
  });
}

// 비동기 실행을 테스트해보자.
console.log("step1");
let promise = myFun2();
// promise 비동기 업무 결과가 발생할 때 실행할 함수 등록. 실행이 아님. 실행은 비동기 업무 결과가 발생할 때 자동 실행된다.
promise.then((result) => {
  // result : promise에서 발생시킨 데이터를 매개변수로 받는다.
  console.log(`result : ${result}`);
});
console.log("step2");
/*
  step1
  step2
  result: 10
*/
