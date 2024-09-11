"use strict";

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
