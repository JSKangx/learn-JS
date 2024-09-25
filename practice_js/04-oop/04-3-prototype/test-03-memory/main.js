"use strict";

function User1(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Hello, ${this.name}`);
  };
}

let user1 = new User1("Alberto");
let user2 = new User1("Betty");
user1.sayHello(); // Hello, Alberto
user2.sayHello(); // Hello, Betty
// user1과 user2에 있는 sayHello가 동일한 함수일까?
console.log(user1.sayHello == user2.sayHello); // false. 각각 객체의 메모리에 저장.

function User2(name) {
  this.name = name;
  User2.prototype.sayHello = function () {
    console.log(`Hello, ${this.name}`);
  };
}

let user3 = new User2("Charlie");
let user4 = new User2("Demian");
user3.sayHello(); // Hello, Charlie
user4.sayHello(); // Hello, Demian
console.log(user3.sayHello == user4.sayHello); // true. 같은 prototype 메모리에 저장.
