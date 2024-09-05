"use strict";

let data1 = 10;
// data2를 선언하지 않고 값을 할당하는 문법적 오류
data2 = 20;

console.log(data1, data2);

function myFunc() {
  // 엄격모드를 선언하지 않으면 콘솔에서 에러메시지 없이 data4를 출력해준다.
  "use strict";
  let data3 = 10;
  // data4를 선언하지 않고 값을 할당하는 문법적 오류
  data4 = 20;

  console.log(data3, data4);
}

myFunc();
