"use strict";

// 1 ~ 10 더하기
let num = 1;
let sum = 0;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(`sum: ${sum}`);

// 초기부터 조건이 false면 실행이 안 된다.
while (false) {
  console.log("while body");
}

// 초기조건이 false여도 do의 바디는 실행됨.
do {
  console.log("do while body");
} while (false);

let i = 1;
while (i <= 9) {
  console.log(`2 X ${i}  = ${2 * i}`);
  i++;
}
