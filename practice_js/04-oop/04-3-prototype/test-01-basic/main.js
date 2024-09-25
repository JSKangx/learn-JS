"use strict";

// (1) 일반 함수와 프로토타입 테스트
function myFun(arg1, arg2) {
  console.log(arg1, arg2);
}
// 일반함수에도 prototype 객체가 있을까?
console.log(myFun.prototype); // Constructor만 가지고 있는 Object가 존재함.

// (2) 생성자 함수와 프로토타입 테스트
function User(name, age, address) {
  this.name = name; // this로 선언한 것은 객체가 생성될 때마다 객체의 메모리에 유지.
  // prototype으로 선언한 것은 prototype 객체의 메모리에만 유지.
  // 그러나 이 생성자 함수로 생성된 모든 함수가 공유 가능한 멤버임.
  User.prototype.age = age;
  User.prototype.address = address;
}
let user1 = new User("홍길동", 20, "Seoul");
console.log(user1.name, user1.age, user1.address); // 홍길동 20 Seoul
let user2 = new User("김길동", 30, "Pusan");
console.log(user2.name, user2.age, user2.address); // 김길동 30 Pusan
console.log(user1.name, user1.age, user1.address); // 홍길동 30 Pusan
// 왜 이렇게 나왔지? user2에 의해 prototype 객체의 멤버 값이 바뀌었기 때문.
// age와 address는 user1의 메모리에는 없는 것이기에 상속 받아 사용은 할 수 있지만, 값은 prototype 객체에 저장된 상태로 나온다.

console.dir(user1);
console.dir(user2);

// (3) prototype 객체의 프로퍼티 값을 외부에서 대입해서 바꿀 수 있을까?
// age, address는 user1 객체 메모리에는 없는 값임.
user1.age = 40;
user1.address = "Incheon";
console.log(user1.name, user1.age, user1.address); // 홍길동 40 Incheon
console.log(user2.name, user2.age, user2.address); // 김길동 30 Pusan
// 왜 이럴까? user1.age는 prototype 객체 내의 프로퍼티를 바꾸는 게 아니라, user1 객체 내의 동일 이름의 변수가 선언되기에, 자신의 프로퍼티를 변경하는 것이다.
console.dir(user1);
console.dir(user2);

// 생성자 함수 내에서만 prototype 멤버가 추가되는 것이 아니라 외부에서도 추가 가능하다.
User.prototype.email = "aaaa@a.com";
console.log(user1.name, user1.age, user1.address, user1.email); // 홍길동 40 Incheon aaaa@a.com
console.dir(user1);

// 객체의 멤버명과 프로토타입의 멤버명이 동일한 경우엔 어떤 멤버가 적용될까?
// 객체의 멤버가 우선 적용된다. 상속이 안 된다는 말.
// 만약 이름이 동일하지만, 프로토타입의 멤버를 참조하고 싶다면?
console.log(user1.__proto__.age, user1.age); // 30, 40
