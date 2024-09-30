"use strict";

// 클래스 예약어로 객체 모형 생성.
// 클래스 내에는 3개의 구성요소(변수, 함수, 생성자)가 추가될 수 있다.
// 생성자가 없는 클래스는 존재할 수 없지만, 개발자가 선언해주지 않으면 매개변수를 전달할 수 없는 디폴트 생성자가 생성됨.
class User {
  name = "Alberto";
  /*
    생성자를 생성하지 않으면 아래와 같이 디폴트 생성자가 멤버로 생성된다.
    constructor() {}
    -> 객체 생성 역할을 하기 때문에 매개변수와 로직이 없는 생성자도 의미가 있다.
  */
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}
let obj = new User();
// constructor를 개발자가 임의로 정해주지 않았기 때문에, obj의 멤버로 name = "Alberto"가 생성되었다.
obj.sayHello(); // Hello, Alberto!

// constructor를 명시적으로 선언해보자
class User3 {
  // 아랫줄은 '클래스 필드 선언'이다. 이 필드는 객체가 생성될 때 인스턴스의 name 프로퍼티를 생성한다. 하지만, constructor에 의해 생성자의 파라미터로 name이 다시 주어지기 때문에 주어진 파라미터로 덮어쓰여진다.
  name = "Betty";
  constructor(name) {
    // name - 생성자가 호출되는 시점에서만 유지되는 로컬 변수
    // this.name = 생성되는 객체의 멤버
    this.name = name;
  }
  // 함수는 생성자 필드에 정의하지 않더라도 prototype에 자동 저장이 되기 때문에 User3로 생성되는 객체에서 접근이 가능하다.
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

let obj3 = new User3("Charlie");
obj3.sayHello(); // Hello, Charlie!
console.log(obj3);

// class는 오직 하나의 constructor 만 가질 수 있다.
/*
  class User4 {
    constructor() {}
    constructor(name) {}
  }
*/
