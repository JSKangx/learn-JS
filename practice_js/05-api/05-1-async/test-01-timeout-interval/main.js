"use strict";

// 이 시점부터 timeEnd까지 걸린 시간 출력
// console.time();

// function sayHello() {
//   // console.time부터 이 코드 실행까지 시간이 얼마나 걸리는지 성능 테스트하는 메서드
//   console.timeEnd();
//   console.log("Hello");
// }

// // setTimeout이지만, 지연 시간을 설정하지 않아 즉시실행
// // 즉, time부터 timeEnd까지 매우 짧은 시간이 걸림
// // setTimeout(sayHello);

// // 1초 후에 실행
// // sayHello 함수는 1초 뒤에 실행된다. 그래서 console.time에서 timeEnd까지 1초 걸린다
// setTimeout(sayHello, 1000);

// // setTimeout에는 함수에 전달할 인수를 3번째 매개변수부터 넣을 수 있다.
// function sayHello2(arg1, arg2, arg3) {
//   console.log(`Hello, ${arg1}, ${arg2}, ${arg3}`);
// }
// setTimeout(sayHello2, 1000, "홍길동", 10, true);

// // // setTimeout에게 준 의뢰를 취소하려면 식별자가 필요하다.
// function sayHello3() {
//   console.log("sayHello3");
// }
// let id = setTimeout(sayHello3, 1000); // 이 setTimeout은 아랫줄에 의해 실행되지 않는다.
// clearTimeout(id);

// // setInterval : 함수를 주기적으로 실행시키고 싶다.
// function fun1(name) {
//   console.log(`fun1, ${name}`);
// }
// let interval1 = setInterval(fun1, 1000, "홍길동");
// // 3초 후에 clearTimeout을 실행해라. 위 코드에 의해 fun1 함수가 1초마다 3번 실행되고, 아래 코드에 의해 멈춘다.
// setTimeout(() => clearTimeout(interval1), 3000);

// 0.5초 걸리는 업무를 1초마다 반복 호출하고 싶다.
// (1) 일부러 0.5초가 걸리는 업무를 만들었다.
function sleep(milliSec) {
  // sec(초) 후에 Promise의 결과를 반환하는 함수.
  return new Promise((resolve) => setTimeout(resolve, milliSec));
}
// 웹 브라우저에서 고해상도의 현재 시간을 반환하는 함수. 페이지가 로드된 이후부터 이 코드가 실행되기 까지 경과한 시간을 밀리초 단위로 반환한다.
// 사실상 페이지가 로드된 후에 바로 찍히기 때문에, 스탑워치를 시작하는 행위라고 볼 수 있다.
let startTime = performance.now();

// let sayHello4 = async () => {
//   // 페이지가 로드된 후 현 시점까지 걸린 시간을 찍어 랩타임 기록
//   // 이 함수는 setInterval에 의해 1초 뒤에 실행되므로, start-end 사이의 시간은 1초일 것.
//   let endTime = performance.now();
//   console.log(endTime - startTime);
//   // 끝점을 다시 시작점으로 교체
//   startTime = endTime;
//   // 500밀리초 동안 실행되는 함수를 실행하고, sayHello4 함수는 이 함수가 끝날때까지 종료되지 않는다.
//   await sleep(500);
// };
// let interval2 = setInterval(sayHello4, 1000);
// setTimeout(() => clearInterval(interval2), 3000);
/*
  1001.9000000022352
  999.0999999977648
  1000.4000000022352
  업무가 1초마다 실행된 것이 아니라, 함수 호출 자체가 1초마다 되었다.
  setInterval은 지정된 시간 간격마다 함수를 호출할 뿐, 이전에 실행된 함수가 끝나기를 기다리지 않는다.
*/

// 0.5초 걸리는 업무를 진행한 후에 1초 쉬고 다시 업무 진행한다.
let sayHello = async () => {
  let nowTime = performance.now();
  console.log(nowTime - startTime);
  startTime = nowTime;
  await sleep(500); // 0.5초 업무 진행(이 줄이 실행되는데 0.5초가 걸린다)
  // sayHello 함수가 끝나고 1초 뒤 자기 자신을 또 호출함.
  // 하지만 sleep이 끝날때까지 0.5초를 더 기다려야 하니, 총 걸린 시간은 1.5초가 된다.
  setTimeout(sayHello, 1000);
};
// setTimeout(sayHello, 1000);
