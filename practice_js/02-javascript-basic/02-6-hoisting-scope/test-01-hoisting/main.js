"use strict";

// var로 선언한 변수 호이스팅 테스트
console.log(`step1, data1 = ${data1}`); // undefined
data1 = 20;
console.log(`step2, data1 = ${data1}`); // 20
var data1 = 10;
console.log(`step3, data1 = ${data1}`); // 10

// let, const로 선언한 변수 호이스팅 테스트
// console.log(data2); // Cannot access 'data2' before initailizaion
// console.log(data3); // Cannot access 'data2' before initailizaion
let data2 = 10;
let data3 = 30;

// 함수 호이스팅 테스트 (선언문) : 가능
console.log(myFun1()); // "myFun1 call"
function myFun1() {
  return "myFun1 call";
}

// 함수 호이스팅 테스트 (표현식)
// console.log(myFun2()); // Error. Cannot access 'myFun2' before initialization
const myFun2 = () => {
  return "myFun2 call";
};

// 선언식 함수로 선언하면 호이스팅이 될까?
console.log(myFun2());
function myFun2() {
  console.log("myFun2");
}

// var로 함수를 선언하면 호이스팅이 가능할까?
// console.log(myFun3()); // Uncaught TypeError: myFun3 is not a function
/* 
  var로 선언하면 호이스팅이 되기는 한다.
  그런데 선언 부분만 위로 올린다. 값이 할당되기 전까지는 undefined 상태다.
  표현식 함수로 선언하면 호이스팅이 안 된다.
*/
var myFun3 = () => {
  return "myFun3 call";
};
