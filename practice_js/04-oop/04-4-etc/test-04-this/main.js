"use strict";

// 생성자 함수 내에서의 this
function User1(arg1) {
  // 호출하면 객체가 만들어지고, this는 그 객체를 가리킴
  console.log(this); // User1 {}
  this.data = arg1;
  // 변수가 등록된 후의 this는 내용물이 채워진 상태의 객체임.
  console.log(this); // User1 {data: 'Fabri'}
}
let user1 = new User1("Fabri");
console.log(user1); // User1 {data: 'Fabri'}

// 객체 메서드 내의 this
function User2(arg1, arg2) {
  this.name = arg1;
  this.age = arg2;
  this.sayHello = function () {
    console.log(`Hello, ${this.name}(${this.age})!`);
  };
}
let user2 = new User2("Betty", 20);
let user3 = new User2("Charlie", 30);
// 객체 메서드 this는 메서드를 호출하는 객체를 가리킨다.
user2.sayHello(); // Hello, Betty(20)!
user3.sayHello(); // Hello, Charlie(30)!

// 생성자 함수 내에 사용된 화살표 함수 안에서의 this
function User3() {
  this.data = 20;
  // 함수 선언문으로 정의된 함수
  this.fun1 = function () {
    console.log(this.data);
  };
  // 화살표 함수로 정의된 함수
  this.fun2 = () => {
    console.log(this.data);
  };
}
let user4 = new User3();
user4.fun1(); // 20
user4.fun2(); // 20. this는 선언 시점의 상위 스코프(User3)를 가리킴

// object literal로 만든 객체의 함수 내의 this
let obj = {
  data: 30,
  fun1: function () {
    console.log(this.data);
  },
  fun2: () => {
    console.log(this.data);
  },
};
obj.fun1(); // 30 -> 함수 선언문 내의 this는 동적 결정임. 객체가 만들어진 후 함수 호출
obj.fun2(); // undefined. -> 화살표 함수 내의 this는 정적 결정임(lexical). object literal 선언 시점의 {}는 객체를 만들기 위한 정보에 지나지 않는다. 스코프가 아니다. 그래서 this는 window를 가리킨다.
// 권장사항 : 화살표 함수는 간단하게 함수를 선언하고 싶을 때 자주 이용할 수 있다. 그러나 함수 내에 this를 사용해야 하는 경우에는 함수 선언문을 사용하면 좋다.
