"use strict";

let array1 = [10, 20];
let array2 = [30, 40];

// 두 배열의 데이터를 합쳐서 새로운 배열을 반환해보자.
let array3 = array1.concat(array2);
console.log(array3); // [10, 20, 30, 40]

// 배열의 모든 데이터를 구분자로 결합해서 하나의 문자열로 반환해보자.
let result1 = array3.join("a");
console.log(result1); // 10a20a30a40

// 배열에 데이터를 추가해보자.
array3.push(100);
array3.unshift(200);
console.log(array3); // [200, 10, 20, 30, 40, 100]

// 여러개의 데이터를 한번에 추가해보자.
array3.push(1000, 2000);
array3.unshift(3000, 4000);
console.log(array3); // [3000, 4000, 200, 10, 20, 30, 40, 100, 1000, 2000]

// 배열의 데이터를 삭제해보자.
array3.pop();
array3.shift();
console.log(array3); // [4000, 200, 10, 20, 30, 40, 100, 1000]

// splice를 사용해 다양한 기능을 구현해보자.
// (1) 추가
let array = [10, 20, 30, 40];
// 인덱스 2 부터, 0개의 데이터를 삭제 후, 'hello'추가.
array.splice(2, 0, "hello");
console.log(array); // [10, 20, 'hello', 30, 40]

// (2) 여러개 추가
array.splice(2, 0, "one", "two", "Charlie");
console.log(array); // [10, 20, 'one', 'two', 'Charlie', 'hello', 30, 40]

// (3) 교체
// 인덱스 2부터, 3개의 데이터를 삭제 후, 3개의 데이터 추가
array.splice(2, 3, "html", "css", "javaScript");
console.log(array); // [10, 20, 'html', 'css', 'javaScript', 'hello', 30, 40]

// (4) 삭제
array.splice(2, 3);
console.log(array); // [10, 20, 'hello', 30, 40]

// slice 함수로 데이터를 획득해보자.
let result2 = array.slice(1, 4); // [20, 'hello', 30]
console.log(result2);

// 숫자를 하나만 지정하면 그 위치부터 나머지 다 반환
let result3 = array.slice(2);
console.log(result3); // ['hello', 30, 40]
let result4 = array.slice(1, 8); // 숫자를 많이 줘도 마지막 인덱스까지만 반환
console.log(result4); // [20, 'hello', 30, 40]
