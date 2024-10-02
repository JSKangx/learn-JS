"use strict";

// function sayHello() {
//   // console.time부터 이 코드 실행까지 시간이 얼마나 걸리는지 성능 테스트하는 메서드
//   console.timeEnd();
//   console.log("Hello");
// }

// timeEnd까지 걸린 시간 출력
// console.time();
// 시간을 설정하지 않아 즉시실행
// setTimeout(sayHello);

// 1초 후에 실행
// sayHello 함수는 1초 뒤에 실행된다. 그래서 console.time에서 timeEnd까지 1초 걸린다
// setTimeout(sayHello, 1000);

// setTimeout에 함수를 넣어보자.
// function sayHello2(arg1, arg2, arg3) {
//   console.log(`Hello, ${arg1}, ${arg2}, ${arg3}`);
// }
// setTimeout(sayHello2, 1000, "홍길동", 10, true);

// // setTimeout에게 준 의뢰 취소하려면 식별자가 필요하다.
// function sayHello3() {
//   console.log("sayHello3");
// }
// let id = setTimeout(sayHello3, 1000);
// clearTimeout(id);

// setInterval : 함수를 주기적으로 실행시키고 싶다.
function fun1(name) {
  console.log(`fun1, ${name}`);
}
// let id = setInterval(fun1, 1000, "홍길동");
// 3초 후에 clearTimeout을 실행해라
// setTimeout(() => clearTimeout(id), 3000);

// 0.5초 걸리는 업무를 1초마다 반복 호출하고 싶다.
// (1) 일부러 0.5초가 걸리는 업무를 만들었다.
function sleep(sec) {
  // sec(초) 후에 결과 리턴하는 함수
  return new Promise((resolve) => setTimeout(resolve, sec));
}
// // 현재 시각을 측정
let beforeTime = performance.now();

// let sayHello = async () => {
//   let nowTime = performance.now();
//   console.log(nowTime - beforeTime);
//   // 끝점을 다시 시작점으로 교체
//   beforeTime = nowTime;
//   await sleep(500);
// };
// let id = setInterval(sayHello, 1000);
// setTimeout(() => clearInterval(id), 3000);
/*
  1001.9000000022352
  999.0999999977648
  1000.4000000022352
  업무가 1초마다 실행된 것이 아니라, 함수 호출 자체가 1초마다 되었다.
*/

// 0.5초 걸리는 업무를 진행한 후에 1초 쉬고 다시 업무 진행한다.
let sayHello = async () => {
  let nowTime = performance.now();
  console.log(nowTime - beforeTime);
  beforeTime = nowTime;
  await sleep(500); // 0.5초 업무 진행(이 줄이 실행되는데 0.5초가 걸린다)
  setTimeout(sayHello, 1000);
};
// setTimeout(sayHello, 1000);
