"use strict";

// local variables, global variables
let data1 = 10; // global variable

function myFun(arg1) {
  let data2 = 20;
  // 함수 내부에서는 global, local variables 사용 가능.
  console.log(`${data1}, ${data2}, ${arg1}`);
}
myFun(30);
console.log(data1);
// console.log(arg1); // Uncaught ReferenceError: arg1 is not defined. 매개변수는 함수 내부에서만 사용 가능한 local variable이다.
// Error 발생되었기에, 아래 코드 라인 실행 안 함.
// console.log(data2); // Uncaught ReferenceError: data2 is not defined. data2는 함수 내부에서만 선언된 local variable.

// high order function. 함수를 (1) 매개변수로, (2) 리턴값으로 설정 가능.
function test1() {
  console.log("test1");
}
function test2() {
  console.log("test2");
}

function myFun2(arg) {
  arg(); // 이 부분 때문에 인수에는 함수만 올 수 있게 됨.
  return test2;
}

let result = myFun2(test1);
/*
  myFun2(test1)은 다음과 같다.
    function myFun2() {
      test1();
      return test2;
    }
  반환된 test2가 result에 저장됨.
*/
result();
// result 함수를 실행하면 (1) myFun2(test1)이 실행되고, 반환된 test2도 실행된다.

// 특정 함수 안에서만 사용되는 함수(로직)라면 외부에서 정식으로 선언할 필요가 없다.
function myFun3(arg) {
  arg();
  return () => console.log("test4"); // 화살표 함수로 익명 함수 정의.
}
let result3 = myFun3(() => console.log("test3")); // 화살표 함수로 익명 함수 정의.
result3();
