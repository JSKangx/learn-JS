"use strict";

// 서로 아무 상관없는 객체와 함수를 선언한다.
let obj1 = {
  name: "홍길동",
};
let sayHello = function () {
  console.log(`Hello, ${this.name}`);
};
// sayHello(); // error. 참조할 this가 없다.
// 의도하에 sayHello 함수를 obj1 객체 안에 선언된 것처럼 돌리고 싶다.
// 그럴 때 사용하는 것이 함수 동적 바인딩 기법
// (1) bind 함수 사용 : 묶어서(bind) 새로운 함수를 반환
let newSayHello = sayHello.bind(obj1);
newSayHello(); // Hello, 홍길동

// (2) apply, call 함수 사용 : 새로운 함수로 반환하는 게 아니라 즉시 호출
let sayHello1 = function (arg1, arg2) {
  console.log(`Hello, ${this.name}, ${arg1}, ${arg2}`);
};
// call 함수는 매개변수를 낱개로 지정
sayHello1.call(obj1, 10, 20); // Hello, 홍길동, 10, 20
// apply 함수는 매개변수를 배열로 한꺼번에 지정
sayHello1.apply(obj1, [10, 20]); // Hello, 홍길동, 10, 20

let array = ["orange", "red", "green"];
array.push("black"); // ["orange", "red", "green", "black"]
array.push("white"); // ["orange", "red", "green", "black", "white"]
console.log(array.shift()); // 원 배열에서 orange가 삭제되고 orange를 반환
console.log(array.pop()); // 원 배열에서 white가 삭제되고 white를 반환
console.log(array); // ["red", "green", "black"]

// 개발을 하다보면 실제 배열은 아니지만 유사 배열인 객체를 만들 때가 있다.
// 배열이 가지고 있는 push, pop, shift 함수 정도만 가지고 싶다.
// 배열에 있는 함수를 직접 객체 내의 알고리즘으로 구현했다.
let myArray = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function (e) {
    // 마지막 index에 e값을 추가하는 기능을 그대로 구현
    this[this.length] = e;
    this.length++;
  },
  pop: function (e) {
    // 마지막 index 데이터를 뽑아내는 기능을 그대로 구현
    let last = this[this.length - 1];
    this.length--;
    delete this[this.length];
    return last;
  },
  shift: function () {
    // 맨 앞의 것을 제거하고 반환
    let first = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    this.length--;
    delete this[this.length];
    return first;
  },
};
myArray.push("black");
myArray.push("white");
console.log(myArray.shift()); // orange
console.log(myArray.pop()); // white
console.log(myArray); // {0: 'yellow', 1: 'green', 2: 'black', length: 3, push: ƒ, pop: ƒ, shift: ƒ}

// 내가 굳이 이 알고리즘을 구현해야되나? 원래 배열 메서드에는 push, pop, shift가 있는데, 그걸 마치 나의 객체에 있는 함수처럼 연결해서 사용하면 되지 않나?
let myArray2 = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function (e) {
    Array.prototype.push.call(this, e);
  },
  pop: function (e) {
    return Array.prototype.pop.call(this);
  },
  shift: function () {
    return Array.prototype.shift.call(this);
  },
};

// 결과는 똑같다.
myArray2.push("black");
myArray2.push("white");
console.log(myArray2.shift()); // orange
console.log(myArray2.pop()); // white
console.log(myArray2); // {0: 'yellow', 1: 'green', 2: 'black', length: 3, push: ƒ, pop: ƒ, shift: ƒ}
