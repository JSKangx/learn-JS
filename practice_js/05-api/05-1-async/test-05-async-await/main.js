"use strict";

// async로 함수 선언하기
// 함수 선언식
// async function myFun1() {
//   setTimeout(() => {
//     console.log("myFun1 called!");
//   }, 2000);
// }
// // 화살표 함수
// let myFun2 = async () => {
//   setTimeout(() => {
//     console.log("myFun2 called!");
//   }, 1000);
// };
// console.log("step1");
// myFun1();
// console.log("step2");
// myFun2();
// console.log("step3");
/*
  step1
  step2
  step3
  myFun2() called! : 1초 뒤
  myFun1() called! : 2초 뒤
*/

// promise로 작성한 것을 async로 재작성 해보자.
// function myFun3() {
//   return new Promise((resolve, reject) => {
//     resolve(1);
//   });
// }
// myFun3().then((result) => console.log(result)); // 1

// async function myFun4() {
//   return 2; // data 발행. resolve(2)와 같은 동작
// }
// myFun4().then((result) => console.log(result)); // 2

// promise 데이터 반복적으로 실행 및 획득
function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`getData(${id})을(를) 호출하신지 1초가 지났습니다.`);
    }, 1000);
  });
}
// function myFun5() {
//   getData(1)
//     .then((result) => {
//       console.log(result);
//       return getData(2);
//     })
//     .then((result) => {
//       console.log(result);
//       return getData(3);
//     })
//     .then((result) => {
//       console.log(result);
//     });
// }
// myFun5();

// 위 코드를 async, await로 작성해보자.
// async function myFun6() {
//   console.log(await getData(1));
//   console.log(await getData(2));
//   console.log(await getData(3));
// }
// myFun6();

// 비동기적으로 실행시켜야 하는 함수가 여러개 있을 때, 여러 함수를 순차적으로 실행시켜야 하는 상황이 아니라면, 동시에 시작시키고, 데이터는 완료되는 순서대로 받으면 된다.
// 2초 정도 걸리는 업무를 하나 만들어보자.
function funA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("funA data 발행");
    }, 2000);
  });
}
// 1초 정도 걸리는 업무를 하나 만들어보자.
function funB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("funB data 발행");
    }, 1000);
  });
}
// 비동기 함수 여러개를 순차적으로 실행할 때
// async function myFun7() {
//   console.time();
//   let aData = await funA(); // 2초 걸림
//   console.log(aData);
//   let bData = await funB(); // 1초 걸림
//   console.log(bData);
//   console.timeEnd();
// }
// myFun7(); // 3초 걸림

// 비동기 함수 여러개를 동시에 시작하도록 작성할 때
// console.time();
// async function myFun8() {
//   console.time();
//   let aData = funA();
//   let bData = funB();
//   console.log(await aData);
//   console.log(await bData);
//   console.timeEnd();
// }
// console.timeEnd();
// myFun8(); // 2초 걸림

// 여러개의 비동기 함수를 동시에 시작하는 것을 Promise.all()을 이용하여 작성해보자.
async function myFun9() {
  console.time();
  Promise.all([funA(), funB()]).then((result) => {
    console.log(result);
    console.timeEnd(); // 2초 걸림
  });
}
myFun9();
