"use strict";

// 객체 여러개의 공통 값인가? prototype에 등록
// 객체별로 다르게 유지되어야 하는 값인가? this에 등록

// 모든 도형에 공통으로 들어가는 멤버를 가진 생성자 함수
function Shape(name) {
  this.name = name;
}
// 모든 도형이 그림 그리는 알고리즘이 동일하기에 프로토타입에 선언.
Shape.prototype.draw = function () {
  // 콘솔에 출력되는 것을 그림 그려졌다고 치자.
  console.log(`${this.name} 도형을 그립니다.`);
};
console.dir(new Shape("rect1"));

// Shape 생성자 함수를 상속 받아서 좀 더 구체적인 도형에 대한 생성자 함수를 만들자.
function Rectangle(name, width, height) {
  // 여기에도 name이 필요하기에 this.name으로 선언할 수도 있지만, 불필요한 코드 중복이다.
  // 상위 개념을 가진 다른 생성자 함수의 멤버를 상속받을 수 있다.
  // Rectangle 객체가 생성되는 시점에 Shape 생성자 함수도 호출됨.
  Shape.apply(this, [name]);
  this.width = width;
  this.height = height;
}
let rect1 = new Rectangle("rect1", 100, 200);
// name을 Rectangle 생성자 함수에 선언하지 않았지만, rect1 객체에는 나왔다.
// 왜? Shape 함수의 name을 상속 받아서 호출했기 때문에
console.log(rect1); // {name: 'rect1', width: 100, height: 200}
// 상위의 prototype 까지 상속되지는 않는다.
// rect1.draw(); // Uncaught TypeError: rect1.draw is not a function

// prototype까지 상속되게 하려면?
// (1) 방법 1 : new 연산자 사용
// Shape 생성자 함수로 새로운 객체를 생성해서, 그것을 Rectangle의 프로토타입으로 교체했다.
Rectangle.prototype = new Shape(); // prototype 교체
// Rectangle의 prototype에 독자적으로 함수 추가
Rectangle.prototype.calcArea = function () {
  console.log(`area: ${this.width * this.height}`);
};
let rect2 = new Rectangle("rect2", 100, 200);
console.log(rect2); // {name: 'rect2', width: 100, height: 200}
rect2.draw(); // rect2 도형을 그립니다.
rect2.calcArea(); // area: 20000
console.dir(rect2);
// this : name, width, height
// 자신의 prototype : name(Shape객체에서 apply로 상속됨), calcArea();
// prototype - prototype : draw()

// (2) 방법 2 : 상위의 프로토타입을 직접 지정
Rectangle.prototype = Shape.prototype;
Rectangle.prototype.calcArea = function () {
  console.log(`area: ${this.width * this.height}`);
};
let rect3 = new Rectangle("rect3", 100, 200);
console.log(rect3.name, rect3.width, rect3.height); // rect3 100 200
rect3.draw(); // rect3 도형을 그립니다.
rect3.calcArea(); // area: 20000
console.dir(rect3);
