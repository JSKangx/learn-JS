"use strict";

// 중복 선언
var data1 = 10;
let data2 = 10;
const data3 = 10;

// 동일 스코프 내에서 중복선언
var data1 = "홍길동"; // 중복선언 가능
// let data2 = "홍길동"; // 중복선언 불가능
// const data3 = "홍길동"; // 중복선언 불가능

// 다른 스코프에서의 중복선언 : let, const 둘 다 가능
let data4 = "홍길동"; // global variable

const myFun = () => {
  let data4 = "김길동"; // local variable
  console.log(`in function ${data4}`); // in function 김길동 (local 우선 적용)
};
myFun();
console.log(`out of function ${data4}`); // out of function 홍길동

// 함수 중복 선언
function myFun1() {
  console.log("step1");
}
function myFun1() {
  console.log("step2");
}
myFun1(); // step2. 선언문으로 하면 함수가 교체된다.

var myFun2 = function () {
  console.log("step1");
};
var myFun2 = function () {
  console.log("step2");
};
myFun2(); // step2. var로는 중복선언이 가능하다.

let myFun3 = function () {
  console.log("step1");
};
// let myFun3 = function () {
//   console.log("step1");
// }; // Uncaught SyntaxError: Identifier 'myFun3' has already been declared

// scope 테스트. 모든 software language에서 변수는 블록 레벨 스코프를 지원. (var 키워드 빼고)
// var name1 = "someFun 바깥쪽"; // global scope

// const someFun = () => {
//   var name1 = "someFun 안쪽";
//   console.log(`in my someFun 1, name 1 = ${name1}`); // name1 = someFun 안쪽
//   for (let i = 0; i < 1; i++) {
//     var name1 = "someFun, for 안쪽";
//     console.log(`in my someFun 1, in for, name 1 = ${name1}`); // name1 = someFun, for 안쪽
//   }
//   console.log(`in my someFun 1, after for, name 1 = ${name1}`); // name1 = someFun, for 안쪽
//   if (true) {
//     var name1 = "someFun, if 안쪽";
//     console.log(`in my someFun, in if, name 1 = ${name1}`); // name1 = someFun, if 안쪽
//   }
//   console.log(`in someFun, after if, name 1 = ${name1}`); // name1 = someFun, if 안쪽
// };
// someFun(); // var로 선언된 변수는 함수 scope만 지원.
// console.log(`out of someFun, name 1 = ${name1}`); // name1 = someFun 바깥쪽

let name1 = "someFun 바깥쪽"; // global scope

const someFun = () => {
  let name1 = "someFun 안쪽";
  console.log(`in my someFun 1, name 1 = ${name1}`); // name1 = someFun 안쪽
  for (let i = 0; i < 1; i++) {
    let name1 = "someFun, for 안쪽";
    console.log(`in my someFun 1, in for, name 1 = ${name1}`); // name1 = someFun, for 안쪽
  }
  console.log(`in my someFun 1, after for, name 1 = ${name1}`); // name1 = someFun 안쪽
  if (true) {
    let name1 = "someFun, if 안쪽";
    console.log(`in my someFun, in if, name 1 = ${name1}`); // name1 = someFun, if 안쪽
  }
  console.log(`in someFun, after if, name 1 = ${name1}`); // name1 = someFun 안쪽
};
someFun(); // let으로 선언된 변수는 블록 레벨 스코프 지원.
console.log(`out of someFun, name 1 = ${name1}`); // name1 = someFun 바깥쪽
