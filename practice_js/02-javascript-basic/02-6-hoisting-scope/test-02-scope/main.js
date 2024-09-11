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
