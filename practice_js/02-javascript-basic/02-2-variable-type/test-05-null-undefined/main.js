// undefined와 null의 구분
let data1 = null;
let data2;
console.log(`data1(${data1}) is a ${typeof data1} type.`);
console.log(`data2(${data2}) is a ${typeof data2} type.`);

// 객체 대입
let user1 = {
  name: "홍길동",
  age: 25,
  address: "seoul",
};

let user2 = null;

console.log(`user1(${typeof user1}) is a ${typeof user1} type.`);
console.log(`user2(${user2}) is a ${typeof user2} type.`);

// Error 1 : Uncaught ReferenceError: data3 is not defined
// console.log(data3);

// Error 2 : Uncaught TypeError: Cannot set properties of null (setting 'name')
// user2.name = "김길동";

// Error 3 : Uncaught TypeError: Cannot set properties of undefined (setting 'name')
// let user4;
// user4.name = "김길동";
