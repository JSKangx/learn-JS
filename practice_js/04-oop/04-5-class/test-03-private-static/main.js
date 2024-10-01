"use strict";

// js에는 접근제한자를 제공하지 않기에 예약어가 없다.
// 그러나 유지보수성 증대를 위해 외부에서 이용하지 못하게 하는 접근제한자 기능을 조금은 사용할 수 있다.
// 매뉴얼에 아무리 써 봐야 다른 개발자가 매뉴얼 안 보고 외부에서 사용해버릴 수 있다.
// private 개념으로 사용하고자 하는 멤버의 이름을 #으로 시작하면 된다.
class User {
  #name;
  age;
  constructor(name, age) {
    // name이 아닌 #name으로 써야 한다.
    this.#name = name;
    this.age = age;
  }
  #myFun() {
    console.log("myFun call........");
  }
  sayHello() {
    console.log(`Hello, ${this.#name}(${this.age})`);
    this.#myFun();
  }
}

let user = new User("Alberto", 20);
// user.#name = "Betty"; // 외부에서 변경 불가. Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
user.age = 30; // 외부에서 접근/변경 가능
user.sayHello();
// user.#myFun(); // 외부에서 실행 불가.
console.log(user);

// static 멤버. 클래스는 객체를 생성하기 위한 것이기에 static을 남발하는 것은 좋지 않다.
class MyClass {
  data1 = 10;
  static data2 = 20;
  myFun1() {
    console.log(`myFun1 call....${this.data1} ${this.data2}`);
  }
  static myFun2() {
    console.log(`myFun2 call....${this.data1} ${this.data2}`);
  }
}
// static 멤버 접근 : 생성자를 생성하지 않아도 클래스 명으로 접근 가능
// this.data1은 undefined다. data1은 클래스 메모리에 없다. 객체를 생성했다고 하더라도 data1은 객체 메모리에만 업로드 된다.
MyClass.myFun2(); // myFun2 call....undefined 20
console.log(MyClass.data2); // 20

// 객체 멤버를 클래스명으로 접근할 수 없다.
console.log(MyClass.data1); // undefined
// MyClass.myFun1(); // Uncaught TypeError: MyClass.myFun1 is not a function

// 객체 멤버는 반드시 객체 생성 수 객체명으로 접근해야 한다.
let obj = new MyClass();
console.log(obj.data1); // 10
obj.myFun1(); // myFun1 call....10 undefined

// static 멤버를 객체명으로 접근할 수 없다.
console.log(obj.data2); // undefined
// obj.myFun2(); // main.js:58 Uncaught TypeError: obj.myFun2 is not a function
