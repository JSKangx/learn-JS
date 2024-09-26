"use strict";

let obj = {
  name: "Alberto",
  age: 23,
  address: "New York City",
  weight: function () {
    console.log("heavy");
  },
};

// 프로퍼티의 descriptor를 확인해보자.
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {value: 'Alberto', writable: true, enumerable: true, configurable: true}

// descriptor 값을 변경해보자.
Object.defineProperty(obj, "age", { writable: false });
obj.name = "Betty";
// obj.age = 10; // Uncaught TypeError: Cannot assign to read only property 'age' of object

// enumerable 값을 변경해보자
// 객체의 프로퍼티 키, 값을 순서대로 열거
console.log(Object.keys(obj)); // ['name', 'age', 'address', 'weight']
console.log(Object.values(obj)); // ['Betty', 23, 'New York City', ƒ]
// 키값쌍을 하나씩 배열로 묶어서 반환
console.log(Object.entries(obj));
// in : 객체에서 프로퍼티 키를 순서대로 추출하는 역할.
for (let property in obj) {
  console.log(property); // name, age, address, weight
}
Object.defineProperty(obj, "age", { enumerable: false });
console.log(Object.entries(obj)); // enumerable : false로 변경된 age 프로퍼티는 제외된 채 열거된다.
for (let property in obj) {
  console.log(property); // name, address, weight
}

// configurable은 description 변경 가능 여부를 조절한다.
// 원래는 writable: false 였는데 true로 바꿀 수 있다.
Object.defineProperty(obj, "age", { writable: true });
Object.defineProperty(obj, "age", { writable: false, configurable: false });
// Object.defineProperty(obj, "age", { writable: true }); // Uncaught TypeError: Cannot redefine property: age
// 다시 configurable: true로 바꿀 수 없다.
Object.defineProperty(obj, "age", { configurable: true });
