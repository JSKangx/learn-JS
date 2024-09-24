"use strict";

// 생성자 함수는 일반 함수와 문법이 같기 때문에, this로 멤버 준비를 안 하면 일반 함수와 똑같이 동작한다.
function User1(arg1, arg2) {
  let name = arg1;
  let age = arg2;
  let sayHello = function () {
    console.log(`Hello, ${name}(${age})!`);
  };
  sayHello();
}
// 함수 호출
User1("Alberto", 20); // Hello, Alberto(20)!
// 객체 생성을 위해 new 연산자 사용해서 호출
let obj1 = new User1("Betty", 30); // Hello, Betty(30)!
// new 연산자 사용하여 객체 생성을 시도했기에, 메모리는 준비된다. 그런데, this를 안 썼기 때문에 객체 내에 name, age, sayHello()가 없다. 즉, 빈 객체가 된다는 것.
console.log(`${obj1.name}, ${obj1.age}`); // undefined, undefined
console.log(obj1); // User1 {}
// obj1.sayHello(); // Uncaught TypeError: obj1.sayHello is not a function

// 제대로된 생성자 함수를 정의해보자.
function User2(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, ${name}(${age})!`);
  };
}

// (1) 정의한 생성자 함수를 일반 함수처럼 호출하는 경우
// new를 이용하지 않았으므로 this가 사용되지 않는다. 그래서 User2.name, User2.age가 준비가 안 된다는 것.
// User2("홍길동", 20); // Uncaught TypeError: Cannot set properties of undefined (setting 'name')

// (2) 객체 생성으로 올바르게 이용
let user1 = new User2("Charlie", 23);
let user2 = new User2("Frank", 22);
user1.sayHello(); // Hello, Charlie(23)!
user2.sayHello(); // Hello, Frank(22)!

// 생성자 함수와 return
// 생성자 함수가 new 연산자와 함께 호출이 되면, 함수 내에서 명시적으로 return 시키지 않아도 생성된 객체가 반환된다.
// (1) 기초 데이터(문자열, 숫자 등 객체가 아닌 데이터)를 리턴한 경우.
function User3(name, age) {
  this.name = name;
  this.age = age;
  return 10;
}
let user3 = new User3("George", 30);
// return 값을 반환하는 게 아니라, 생성된 객체를 반환한다.
console.log(user3); // User3 {name: 'George', age: 30}

// (2) 명시적으로 객체를 return한 경우
function User4(name, age) {
  this.name = name;
  this.age = age;
  return {
    productNo: 1,
    productName: "깡쌤의 에어조던",
  };
}
let user4 = new User4("KKang", 45);
// 명시적으로 객체를 return 하면 생성된 객체가 아닌, return 값이 반환.
console.log(user4); // {productNo: 1, productName: '깡쌤의 에어조던'}

// 외부에서 객체 프로퍼티 추가해 보기
console.dir(user1); // age, name, sayHello()가 있다.
console.dir(user2); // age, name, sayHello()가 있다.

// 외부에서 user1에 프로퍼티와 메서드를 추가해보자.
user1.address = "seoul";
user1.helloFun = function () {
  console.log("hello");
};
console.dir(user1); // name, age, address, sayHello(), helloFun()이 있다.
console.dir(user2); // age, name, sayHello()가 있다.
