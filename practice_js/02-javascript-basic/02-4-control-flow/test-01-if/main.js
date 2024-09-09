"use strict";

let age = 41;
let address = "부산";

// if 조건문
if (age <= 30) {
  console.log(`당신의 나이는 ${age}살이므로, 조건에 만족합니다.`);
} else {
  console.log(`당신의 나이는 ${age}살이므로, 조건에 만족하지 않습니다.`);
}

// if... else if 조건문
if (age < 30 && address === "서울") {
  console.log(
    `당신의 나이는 ${age}이고, 주소는 ${address}이므로, "나이", "거주지역" 조건에 둘 다 만족합니다.`
  );
} else if (age < 30 && address === "부산") {
  console.log(
    `당신의 나이는 ${age}이고, 주소는 ${address}이므로, "나이"조건은 만족하지만, "거주지역" 조건에는 만족하지 않습니다.`
  );
} else {
  console.log(
    `당신의 나이는 ${age}이고, 주소는 ${address}이므로, "나이", "거주지역" 조건에 둘 다 만족하지 않습니다.`
  );
}

// 실행해야 할 코드블록이 한 줄이라면, {} 생략 가능
if (age < 30) console.log("조건에 만족합니다.");
else console.log("조건에 만족하지 않습니다.");

// js는 다양한 타입의 데이터를 boolean값으로 타입 변환하여, Truthy값, Falsy값으로 판단한다.
let data = 1;
if (data) console.log("data is true");
else console.log("data is false");

// Falsy 값 : null, undefined, 0, 빈 문자열,
