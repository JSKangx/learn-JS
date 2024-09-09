"use strict";

let data = 8;
let result;
if (data % 4 === 0) {
  result = "4의 배수입니다.";
} else {
  result = "4의 배수가 아닙니다.";
}

console.log(result);

// 조건문을 삼항 연산자로 표현할 수 있다.
let data2 = 534;
let result2 = data2 % 4 === 0 ? "4의 배수입니다." : "4의 배수가 아닙니다.";
console.log(result2);
