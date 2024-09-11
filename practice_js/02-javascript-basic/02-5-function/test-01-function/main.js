"use strict";

// 함수 선언 및 이용
console.log("step1");
// 함수 선언만으로는 함수 body의 코드블록이 실행되지 않는다.
function myFun1() {
  console.log("execute function body");
}
console.log("step2");
// 함수 실행이 끝나야 함수 호출 아랫줄이 실행된다.
myFun1();
console.log("step3");
// 함수는 몇번이고 반복 호출이 가능하다. 일종의 코드 재사용.
myFun1();

// argument를 사용하여 값을 반환해보자.
function myFun2(arg1, arg2) {
  console.log(`arg1: ${arg1}, arg2: ${arg2}`);
  if (arg1 < arg2) {
    // 함수는 return을 만나면 코드 실행 중단.
    return arg1;
  } else {
    return arg2;
  }
}
let result = myFun2(10, 20);
console.log(result);
// 데이터를 전달하지 않아도 에러는 안 난다. 그냥 undefined로 될 뿐.
myFun2(); // arg1: undefined, arg2: undefined
myFun2(10); // arg1: 10, arg2: undefined

// default parameter
console.log("......myFun3......");
function myFun3(arg1, arg2 = 0) {
  console.log(`arg1: ${arg1}, arg2: ${arg2}`);
}
myFun3(); // arg1: undefined, arg2: 0
myFun3(10); // arg1: 10, arg2: 0
myFun3(10, 20); // arg1: 10, arg2: 20

// rest parameter
console.log("......myFun4......");
function myFun4(arg1, ...arg2) {
  console.log(arg1);
  // rest parameter는 배열이다.
  if (arg2.length > 0) {
    for (let i = 0; i < arg2.length; i++) {
      console.log(`arg2[${i}] = ${arg2[i]}`);
    }
  }
}
myFun4(10, 20);
myFun4(10, 20, 30, 40, 50);
