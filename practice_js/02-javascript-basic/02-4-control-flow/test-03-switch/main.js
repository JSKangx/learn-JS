"use strict";

// 랜덤값을 생성
// Math.round() - 반올림하는 메서드
// Math.random() - 0 ~ 1사이의 랜덤한 실수를 생성
let data = Math.round(Math.random() * 3);
console.log(`랜덤한 숫자를 생성했습니다 : ${data}`);

switch (data % 3) {
  case 0:
    {
      console.log("나머지는 0입니다.");
    }
    break;
  case 1:
    {
      console.log("나머지는 1입니다.");
    }
    break;
  case 2:
    {
      console.log("나머지는 2입니다.");
    }
    break;
  default: {
    console.log("default 부분이 실행되었습니다.");
  }
}
