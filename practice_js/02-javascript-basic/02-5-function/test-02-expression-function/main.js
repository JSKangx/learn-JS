"use strict";

// 함수 선언문 스타일로 함수 선언
function myFun1() {
  console.log("myFun1 call");
}

// 함수 표현식 스타일로 함수 선언
const myFun2 = function () {
  console.log("myFun2 call");
};

// 함수 호출
myFun1();
myFun2();

// 화살표 함수
console.log(".........arrow function.........");
const myFun3 = () => {
  console.log("myFun3 call");
};
myFun3();

// 화살표 함수에서 결과 리턴을 해보자.
const myFun4 = (arg1) => {
  console.log(`myFun4, arg1: ${arg1}`);
  return 20;
};
let result4 = myFun4(10);
console.log(result4);

// 함수의 body가 한줄이라면 중괄호 생략 가능.
// 생략했다면 return을 안 써도 코드블록을 자동으로 return해준다.
const myFun5 = (arg1) => arg1 * 10;
let result5 = myFun5(10);
console.log(result5); // 100

// 매개변수가 하나라면 ()도 생략 가능.
// prettier-ignore
const myFun6 = arg1 => arg1 * 10;
let result6 = myFun6(10);
console.log(result6); // 100
