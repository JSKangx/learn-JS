"use strict";

function User() {}
let user1 = new User();

// typeof 연산자 사용해보기
console.log(typeof 10); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof User); // function
console.log(typeof [10, 20]); // object
console.log(typeof user1); // object

// instaceof 연산자 사용해보기
console.log(10 instanceof Number); // false
console.log(new Number(10) instanceof Number); // true

function Car() {}
console.log(user1 instanceof User); // true
console.log(user1 instanceof Car); // false

function Shape() {}
function Rectangle() {}
// 두 함수는 다른 함수이지만 프로토타입을 일치시켰다.
Rectangle.prototype = Shape.prototype;
let shape = new Shape();
let rect = new Rectangle();

// 서로 다른 생성자 함수로 생성된 객체이지만, 프로토타입이 동일하기 때문에 true로 나온다. 왜냐? instanceof 연산자는 프로토타입이 상속되었는지를 판단하기 때문에.
console.log(shape instanceof Shape); // true
console.log(shape instanceof Rectangle); // true
console.log(rect instanceof Shape); // true
console.log(rect instanceof Rectangle); // true

// Shape 생성자 함수로 새로운 객체를 생성하고 그 객체를 Rectangle의 프로토타입으로 설정
Rectangle.prototype = new Shape();
let shape1 = new Shape();
let rect1 = new Rectangle();
console.log(shape1 instanceof Shape); // true
console.log(shape1 instanceof Rectangle); // false
console.log(rect1 instanceof Shape); // true
console.log(rect1 instanceof Rectangle); // true
