"use strict";

// 함수의 실행 컨텍스트를 눈으로 확인해보자.
// global context
let x = 10;

// function oneFun() {
//   let y = 20;
//   console.log(x, y);
// }
// function twoFun() {
//   let z = 30;
//   console.log(x, z);
// }

// console.log(x);

// oneFun();

// twoFun();

// console.log(x);

// 개발자도구 소스 탭에서 break point를 걸면서 확인해본다.

// closure가 필요없는 상황 : 실행 컨텍스트만으로 변수에 접근가능한 것.
function outerFun() {
  let y = 20;

  function innerFun() {
    let z = 30;
    console.log(x, y, z);
  }
  innerFun();
}
outerFun();

// closure 가 필요한 상황 : 실행 컨텍스트만으로 변수에 접근 불가능한 것.
function outerFun() {
  let y = 20;

  function innerFun() {
    let z = 30;
    console.log(x, y, z);
  }

  return innerFun;
}

let resultFun = outerFun();
resultFun();
