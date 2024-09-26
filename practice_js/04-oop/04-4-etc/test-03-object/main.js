"use strict";

// 객체 리터럴로 객체를 생성해보자.
let user1 = {
  name: "Alberto",
  age: 20,
};
console.log(user1); // {name: 'Alberto', age: 20}
console.dir(user1); // this - name, age / [[Prototype]] : Object
// 모든 객체는 prototype이 지정된다.

// 객체 리터럴로 생성한 것은 아래 과정을 통해 만든것과 동일함
let user2 = Object.create(Object.prototype, {
  name: { value: "Alberto" },
  age: { value: 20 },
});
console.log(user2); // {name: 'Alberto', age: 20}
console.dir(user2);

// Object.create()로 객체를 생성하면서 원하는 prototype을 지정해서 사용할 수 있다.
function Shape(name) {
  this.name = name;
}
Shape.prototype.draw = function () {
  console.log(`${this.name}을 그립니다.`);
};
// rect1 객체의 프로토타입을 Shape의 프로토타입으로 설정
let rect1 = Object.create(Shape.prototype, {
  name: { value: "rect1" },
  width: { value: 100 },
  height: { value: 200 },
});
rect1.draw();
console.dir(rect1);
