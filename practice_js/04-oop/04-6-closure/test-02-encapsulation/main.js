"use strict";

// 아래 생성자 함수, 클래스는 전혀 캡슐화 되어 있지 않다.
// 그래서 외부에서 객체의 데이터를 가지는 변수 멤버를 직접 접근, 활용할 수 있다.
// 유지 보수성이 떨어진다.
function UserFunction() {
  this.name = "홍길동";
  this.age = 10;
}
let obj1 = new UserFunction();
obj1.name = "김길동";
obj1.age = 20;
console.log(obj1.name, obj1.age);

class UserClass {
  constructor() {
    this.name = "홍길동";
    this.age = 10;
  }
}
let obj2 = new UserClass();
obj2.name = "이길동";
obj2.age = 30;
console.log(obj2.name, obj2.age);

// 위 코드를 캡슐화 적용해보자
function UserFunction2() {
  // 생성자 함수 내에 변수가 선언되었지만 객체 변수가 아니기에 객체에 담기지 않는다.
  let name = "홍길동";
  let age = 10;
  // 이 값을 객체에 담지만, 함수를 통해 이용하게 하고 싶다. 클로저 기법 이용
  this.getName = function () {
    return name;
  };
  this.setName = function (value) {
    name = value;
  };
  this.getAge = function () {
    return age;
  };
  this.setAge = function (value) {
    age = value;
  };
}
// 변수가 아닌 함수로 접근한다.
let obj3 = new UserFunction2();
obj3.setName("김길동");
obj3.setAge(20);
console.log(obj3.getName(), obj3.getAge());

class UserClass2 {
  #name = "홍길동";
  #age = 10;

  getName() {
    return this.#name;
  }
  setName(value) {
    this.#name = value;
  }
  getAge() {
    return this.#age;
  }
  setAge(value) {
    this.#age = value;
  }
}
// 외부에서 변수, 함수에 접근 변경하려면 함수를 통해서만 가능하다.
let obj4 = new UserClass2();
obj4.setName("이길동");
obj4.setAge(30);
console.log(obj4.getName(), obj4.getAge());
