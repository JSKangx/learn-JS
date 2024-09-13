"use strict";

// (1) [] 기법으로 배열 선언하기
let product1 = ["book1", "book2"];
let product2 = [];
// instanceof : 좌항의 피연산자가 우항의 타입인지 확인해보는 연산자(true/false)
console.log(product1 instanceof Array);
console.log(product2 instanceof Array);

// (2) new Array() 로 배열 선언 (기본)
let product3 = new Array("book3", "book4");
let product4 = new Array(); // 빈 배열 객체 선언.
console.log(product3 instanceof Array);
console.log(product4 instanceof Array);

// length 메서드 사용하기
// . : 객체 멤버 접근 연산자.
// '객체.멤버(변수 / 함수)' : 객체에 묶여 있는 변수나 함수를 이용하겠다.
console.log(product1.length);

// 배열 객체가 가지고 있는 모든 데이터를 순차적으로 획득해서 로직을 돌리자.
// (1) for문을 사용하는 방법
for (let i = 0; i < product1.length; i++) {
  console.log(`product1[${i}] = ${product1[i]}`);
}

// (2) forEach문을 사용하는 방법
// 매개변수에 전달한 개발자 함수를 배열의 개수만큼 호출
product1.forEach((value, index) => {
  console.log(`product1[${index}] = ${value}`);
});

// 배열 데이터 수정하기
product1[0] = 10;
product1[1] = 20;
console.log(product1);

// 배열에 데이터 추가
product1.push(30);
product1.push(40);
console.log(product1);
