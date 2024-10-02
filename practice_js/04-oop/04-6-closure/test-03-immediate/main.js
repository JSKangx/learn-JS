"use strict";

// 일반 함수 선언과 호출은 별개다.
function myFun(name) {
  console.log(`${name} is called`);
}
myFun("홍길동");
myFun("김길동");

// 즉시 실행 함수의 선언과 호출은 동시에 일어난다.
(function (name) {
  console.log(`Hello ${name}`);
})("홍길동");

// 외부에서 변수와 함수를 이용할 수 없게 하기 위해
(function () {
  let data = 10; // data는 외부에서 접근 불가
  function func1() {} // func1은 외부에서 접근 불가
})();

// 하나의 변수가 여러개의 함수에서 사용되고, 그 이외에는 영향을 미치지 않게 하기 위해
// increment, decrement에서 사용하는 데이터(count)가 코드 어디선가 다른 의미로 사용되는 것을 방지하고 싶다. (예 : count에 갑자기 100을 할당하는 경우)
const counter = (function () {
  let count = 0;
  return function (argFun) {
    count = argFun(count);
    return count;
  };
})();

let increment = (no) => ++no;
let decrement = (no) => --no;

console.log(counter(increment)); // 1
console.log(counter(increment)); // 2
console.log(counter(decrement)); // 1

// 어디선가 count변수를 사용한다고 해도 별개다
let count = 100;
console.log(counter(increment)); // 2
