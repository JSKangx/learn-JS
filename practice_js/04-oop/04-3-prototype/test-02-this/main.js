"use strict";

function User(name) {
  this.name = name;
  User.prototype.point = 20;
  User.prototype.sayHello = function () {
    console.log(`Hello, ${this.name}! Your point is ... ${this.point}!`);
  };
}

let user1 = new User("Alberto");
user1.sayHello(); // Hello, Alberto! Your point is ... 20!

let user2 = new User("Betty");
// prototype 객체와 동일한 이름의 멤버를 다시 선언
user2.point = 30;
user2.sayHello = function () {
  console.log(`Good Morning, ${this.name}! Your point is ${this.point}.`);
};
// 자신의 객체에 있는 멤버를 우선 참조한다.
user2.sayHello(); // Good Morning, Betty! Your point is 30.

// 자신의 객체에 sayHello와 point가 없으니 prototype 객체의 멤버를 참조한다.
let user3 = new User("Charlie");
user3.sayHello(); // Hello, Charlie! Your point is ... 20!
