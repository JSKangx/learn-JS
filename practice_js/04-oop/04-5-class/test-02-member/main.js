"use strict";

class User {
  // class 영역에 멤버 선언
  name;
  sayHello() {
    // 메서드 내에서 this로 객체 프로퍼티 선언 가능하지만 권장하지는 않음.
    // 함수 내에서는 멤버를 활용하는 로직만 작성하길 권장.
    this.address = "Seoul";
    console.log(`Hello, ${this.name}(${this.age}), ${this.address}`);
  }
  constructor(name, age) {
    // 생성자 내에서 this로 멤버 선언이 권장됨.
    this.name = name;
    this.age = age;
    // 생성자 내에서 메서드를 정의할 수 있지만, 일반적으로는 클래스 필드에서 정의함.
    this.sayHello2 = function () {
      // 함수를 생성자 내에, 프로퍼티를 클래스 필드에 작성해도, 접근은 된다.
      console.log(`Hello2, ${this.name}(${this.age}, ${this.address})`);
    };
  }
}

let obj = new User("Alberto", 20);
// 클래스 외부에서 객체의 멤버 추가
obj.phone = "010-111-1111";
obj.sayHello(); // Hello, Alberto(20), Seoul
obj.sayHello2(); // Hello2, Alberto(20, Seoul)
console.log(obj.address, obj.phone); // Seoul 010-111-1111
console.dir(obj);
