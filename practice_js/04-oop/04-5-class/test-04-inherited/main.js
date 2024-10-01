"use strict";

// 상속
class Shape {
  name = "도형";
  x = 0;
  y = 0;
  draw() {
    console.log(`${this.name}을 (${this.x}, ${this.y})에 그립니다.`);
  }
}

// Rect 클래스는 Shape 클래스에서 멤버를 상속 받는다.
// 이렇게 하는 것만으로 상위 클래스의 멤버가 그대로 들어온다.
class Rect extends Shape {
  // 추가) 독자적인 멤버 생성
  width = 0;
  height = 0;
}

let rect1 = new Rect();
// 상위 클래스에서 상속 받은 멤버
rect1.name = "사각형";
rect1.x = 10;
rect1.y = 10;

// 독자적으로 가지고 있는 멤버
rect1.width = 100;
rect1.height = 100;

// 프로토타입을 통해 접근하는 메서드
rect1.draw(); // 사각형을 (10, 10)에 그립니다.

console.log(rect1); // {name: '사각형', x: 10, y: 10, width: 100, height: 100}

// private, static 멤버도 상속이 될까?
class Super {
  data1 = 10;
  #data2 = 20; // private 멤버
  static data3 = 30; // static 멤버
}
class Sub extends Super {
  static data4 = 40;
  subFun() {
    console.log(this.data1);
    // console.log(this.#data2); // Error. #data2는 Super 클래스 안에서만 사용 가능.
  }
}
let obj = new Sub();
obj.subFun(); // 일반 데이터는 상속 됨.
console.log(Super.data3); // static 멤버는 클래스 명으로 접근 가능.
console.log(Sub.data3); // 상위 클래스의 static 멤버는 하위 클래스에 상속 가능.
console.log(obj.data3); // 그러나 객체 메모리에는 올라가지 않기에 객체명을 통해 접근 불가능.

// 생성자 연결관계 테스트 (1) : 생성자를 명시하지 않은 경우(디폴트 생성자)
class Super1 {}
class Sub1 extends Super1 {}
let obj1 = new Sub1(); // 전혀 에러가 없음.

// 생성자 연결관계 테스트 (2) : 생성자를 명시한 경우
class Super2 {
  constructor() {}
}
class Sub2 extends Super2 {
  // constructor() {} // Must call super constructor in derived class before accessing 'this' or returning from derived constructor

  // constructor() {
  //   super(); // 반드시 상위 생성자를 호출해 줘야 함. 생성자 내에서만 작성 가능.
  // }

  constructor() {
    // this.data = 10; // Must call super constructor in derived class before accessing 'this' or returning from derived constructor (아직 메모리에 할당도 안 했는데 접근해서 에러가 남)
    super(); // 반드시 생성자 내에서 첫 번째 줄에, 한 번만 작성되어야 함.
  }
}
let obj2 = new Sub2();

// 생성자 연결관계 테스트 (3) : 상위 생성자 호출하면서 매개변수 전달
class Super3 {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
}
class Sub3 extends Super3 {
  constructor(name, x, y, width, height) {
    super(name, x, y);
    this.width = width;
    this.height = height;
  }
}
let obj3 = new Sub3("rect2", 20, 20, 300, 300);
// Sub3 클래스에서 상위 생성자를 호출하는 구문에 매개변수를 안 넣어줬을 경우
console.log(obj3); //  {name: undefined, x: undefined, y: undefined, width: 300, height: 300}
console.log(obj3); // {name: 'rect2', x: 20, y: 20, width: 300, height: 300}

// 생성자 연결관계 테스트 (4) : override
class Shape2 {
  data = 10;
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
  calcArea() {
    console.log(`${this.name}의 면적을 계산합니다.`);
  }
}
class Rect2 extends Shape2 {
  // 변수 오버라이드
  data = 20;
  constructor(name, x, y, width, height) {
    super(name, x, y);
    this.width = width;
    this.height = height;
  }
  // 함수 오버라이드 (상속 받지 않겠다)
  calcArea() {
    // 명시적으로 상위 함수를 호출하겠다면 super 키워드를 활용
    super.calcArea();
    console.log(`넓이는 ${this.width * this.height}`);
  }
}
let rect3 = new Rect2("사각형", 10, 10, 20, 20);
console.log(rect3.data); // 20
rect3.calcArea();
// super.calcArea() : '사각형의 면적을 계산합니다', console : '넓이는 400'
