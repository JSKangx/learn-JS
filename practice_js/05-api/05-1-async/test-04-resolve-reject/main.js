"use strict";

// 에러를 핸들링 할 수 있는 try... catch 구문을 배워보자.
/* 
  원래 에러 발생되면 코드 실행이 멈춘다.
  하지만 에러가 발생되었다고 하더라도 정상적으로 코드 실행을 진행시킬 수 있다.

  try는 무조건 실행 -> 에러 발생하지 않으면 catch 코드 실행 안 됨.
  에러 발생하면, 발생한 다음 라인부터 try의 밑 부분은 실행되지 않고 catch로 바로 이동.
*/
try {
  // 정상적으로 실행되어야 하는 코드
  console.log("1");
  // 일부러 에러 발생시키는 객체 생성. (throw : 에러 발생시키기)
  throw new Error("my error is occured!");
  console.log("1-1");
} catch (e) {
  // try에서 에러가 발생될 때 자동으로 실행되는 에러 대응 코드
  console.log("2");
}
console.log("3");

// (1) promise : 비동기 실행 후 결과 전달할 필요가 없는 경우. 데이터 발행을 안 한다.
/*
  function myFun1() {
    return new Promise(() => {
      let interval = setInterval(() => {
        console.log("in promise");
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
      }, 3000);
    });
  }
  console.log("step1");
  myFun1();
  console.log("step2");
*/

// (2) promise : 비동기 실행 후 결과 전달해야 하는 경우. 데이터 발행
// function myFun2() {
//   return new Promise((resolve) => {
//     // resolve함수의 매개변수가 결과 데이터이다.
//     // then에 등록한 함수가 호출되면서 매개변수로 전달된다.
//     setTimeout(() => resolve(10), 1000);
//   });
// }
// myFun2().then((result) => console.log(`result : ${result}`));

// (3) promise : 비동기 실행 후 결과도 전달하고, 에러 정보도 발행해야 하는 경우.
function myFun3(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) resolve(num * num);
    else reject("0보다 큰 수를 지정하세요.");
  });
}

// reject까지 받으려면 then에 콜백 함수 2개 등록해야 한다.
myFun3(10).then(
  (result) => console.log(`result : ${result}`),
  (error) => console.log(error)
); // result : 100

myFun3(-10).then(
  (result) => console.log(`result : ${result}`),
  (error) => console.log(error)
); // 0보다 큰 수를 지정하세요.

// then에 콜백함수를 여러개 등록하는 것이 복잡하고 불편하다면?
// error만 별도로 catch에 등록할 수 있다.
myFun3(10)
  .then((result) => console.log(`result: ${result}`)) // 실행됨
  .catch((error) => console.log(error)) // 실행 안 됨
  .finally(() => console.log("finally 실행은 옵션입니다.")); // 실행됨

myFun3(-10)
  .then((result) => console.log(`result: ${result}`)) // 실행 안 됨
  .catch((error) => console.log(error)) // 실행됨
  .finally(() => console.log("finally 실행은 옵션입니다.")); // 실행됨
