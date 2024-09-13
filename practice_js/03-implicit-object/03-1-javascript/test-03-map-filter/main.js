"use strict";

let array = [11, 3, 20, 15, 5];

// 배열 데이터 중에서 10보다 큰 수만 반환
let result = array.filter((value) => {
  // return 뒤에 조건을 입력
  return value > 10;
});
console.log(result); // [11, 20, 15]

// 배열의 데이터가 모두 조건에 만족하는지 확인
result = array.every((value) => {
  // return 뒤에 조건을 입력
  return value > 4;
});
console.log(result); // false

// 배열의 데이터에 모두 2를 곱한 결과를 반환
result = array.map((value) => {
  // return 뒤에 조건을 입력
  return value * 2;
});
console.log(result); // [22, 6, 40, 30, 10]

// 배열의 데이터를 내림차순 정렬.
// 정렬 알고리즘은 개발자 알고리즘, 매개변수로 지정
// 정렬을 하려면 두 데이터 중 어느것이 큰지에 대한 판단을 해야 한다. 그래서 매개변수 2개
result = array.sort((data1, data2) => {
  // 반환값은 양수, 0, 음수다.
  /* 
    양수 : data1이 data2보다 크다.
    0 : 두 데이터가 동일
    음수 : data2가 data1보다 크다.
  */
  if (data1 > data2) return 1;
  else if (data1 === data2) return 0;
  else return -1;
});
console.log(result); // [3, 5, 11, 15, 20]

// 배열의 데이터를 오름차순 정렬
result = array.sort((data1, data2) => {
  if (data1 > data2) return -1;
  else if (data1 === data2) return 0;
  else return 1;
});
console.log(result); // [20, 15, 11, 5, 3]
