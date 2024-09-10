"use strict";

// while 문으로 바꿔서 표현해보자.
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(`for body ${i}`);
  if (i === 7) {
    break;
  }
}

// for (let num1 = 0; num1 < 2; num1++) {
//   console.log(`step1: ${num1}`);
//   for (let num2 = 0; num2 < 2; num2++) {
//     console.log(`step2: ${num1}, ${num2}`);
//   }
// }
// step1: 0;
// step2: 0, 0;
// step2: 0, 1;
// step1: 1;
// step2: 1, 0;
// step2: 1, 1;

// for (let num1 = 0; num1 < 2; num1++) {
//   console.log(`step1: ${num1}`);
//   for (let num2 = 0; num2 < 2; num2++) {
//     console.log(`step2: ${num1}, ${num2}`);
//     break;
//   }
// }
// step1: 0
// step2: 0, 0 -> inner loop 탈출, outer로 다시 진입
// step1: 1
// step2: 1, 0

outer: for (let num1 = 0; num1 < 2; num1++) {
  console.log(`step1: ${num1}`);
  for (let num2 = 0; num2 < 2; num2++) {
    console.log(`step2: ${num1}, ${num2}`);
    break outer;
  }
}
// step1: 0
// step2: 0, 0 -> outer loop 탈출. 끝.
