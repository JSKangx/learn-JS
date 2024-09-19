"use strict";

// 반올림
console.log(Math.round(0.56)); // 1
console.log(Math.round(1)); // 1
console.log(Math.round(1.1)); // 1
console.log(Math.round(-0.56)); // -1
console.log(Math.round(-1.1)); // -1

// random 값(실수) 생성
console.log(Math.random()); // 0 - 1사이의 난수
console.log(Math.random() * 10); // 0 - 10 사이의 난수
console.log(Math.random() * (70 - 51) + 51); // 51에서 70 사이의 난수

// 최소, 최대값을 구하는 방법.
console.log(Math.min(38, 45, 21, 60));
console.log(Math.max(38, 45, 21, 60));

// 배열의 원소 중에 최소, 최대값을 구하려면?
let array = [38, 45, 21, 60];
console.log(Math.min(...array)); // 스프레드 연산자를 이용.
console.log(Math.max(...array));
