"use strict";

// object literal 기법으로 객체 선언하기
let user = {
  name: "Alberto",
  age: 21,
  isMember: true,
  // 객체 내의 객체 선언
  order: {
    productId: 2,
    count: 10,
  },
  // 객체 내의 함수 선언 (메서드)
  sayHello: function () {
    console.log(`Hello, ${this.name}(${this.age})!`);
  },
  // sayHello2: function () {
  //   // 객체 내의 다른 멤버를 지칭할 때는 반드시 'this' 예약어를 이용해야 한다.
  //   console.log(`Hello, ${this.name}(${age})!`);
  // },
  sayHello3: () => {
    // 객체 내의 함수를 화살표 함수로 선언할 때 'this' 사용에 주의해야 한다.
    console.log(`Hello, ${this.name}(${this.age})!`);
  },
};

// 선언된 객체 멤버 접근
console.log(user.name); // Alberto
console.log(user.order.productId); // 2
user.sayHello(); // Hello, Alberto(21)!
// user.sayHello2(); // Uncaught ReferenceError: age is not defined
user.sayHello3(); // Hello, (undefined)! 화살표 함수 내의 this는 window 객체를 가리킨다.

// 멤버 선언 축약형
// 전역 변수 선언
let name = "Betty";
let age = 30;

// (1) 전역 변수를 값으로 할당
let user1 = {
  name: name,
  age: age,
};
// (2) 키와 값이 동일하다면 아래와 같이 축약하여 선언 가능
let user2 = {
  name,
  age,
  sayHello: function () {
    console.log(`Hello, ${this.name}(${this.age})!`);
  },
};
user2.sayHello();

// 객체의 프로퍼티를 나중에 추가할 수도 있다.
user2.address = "Seoul";
user2.sayHello2 = function () {
  console.log(`Hello, ${this.name}(${this.age}, ${this.address})!`);
};
console.log(user2);
user2.sayHello2();
