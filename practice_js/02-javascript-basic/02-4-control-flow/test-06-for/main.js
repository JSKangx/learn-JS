"use strict";

for (let i = 0; i < 3; i++) {
  console.log(`Hello ${i}`);
}

for (let i = 3; i > 0; i--) {
  console.log(`World ${i}`);
}

for (let data1 = 1, data2 = 10; data1 <= 5 && data2 > 5; data1++, data2 -= 2) {
  console.log(`data1: ${data1}, data2: ${data2}`);
}

// for문을 사용하여 배열의 원소를 순회해보자.
let array = [10, 20, 30];
for (let i = 0; i < array.length; i++) {
  console.log(`array[${i}] = ${array[i]}`);
}

// 1부터 10까지 더한 결과를 출력해보자.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// 1부터 10까지 홀수만 더한 결과를 출력
let sum2 = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) sum2 += i;
}
console.log(sum2);

// 구구단
for (let i = 1; i <= 9; i++) {
  console.log(`2 X ${i} = ${2 * i}`);
}
