"use strict";

let obj = {
  /* 
    그냥 변수로 선언해도 외부에서 이 값에 접근/이용할 수 있지만
    이 값 자체가 너무 중요해서 이 값이 변경될 때 운용로그를 남기라는 특별한 회사의 방침이 추가되었다면?
    이걸 함수로 바꾸면, 이미 num 이라는 프로퍼티를 사용하고 있던 다른 코드들도 다 바꿔줘야 한다.
    이거 자체를 함수로 바꾸기보다 getter, setter 함수를 사용하면 된다.
  */
  _num: 10,
  get num() {
    return this._num;
  },
  set num(value) {
    // num의 값을 변경할 때마다 로그를 남기라는 회사의 방침
    console.log("운용로그를 남깁니다.");
    this._num = value;
  },
};
// 함수명인데 변수명처럼 사용할 수 있다.
obj.num = 20; // set 함수가 호출되어 (1) 로그를 남기고, (2) 값이 변경되었다.
console.log(obj.num); // 20 : num의 값이 setter 함수에 의해 변경되었다.
