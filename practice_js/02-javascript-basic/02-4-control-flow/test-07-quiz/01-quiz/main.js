"use strict";
/*
  1. 해당 숫자가 소수인지 아닌지를 판별하는 방법
  1-1. 2나 3제외하고 2나 3으로 나누어떨어지지 않는 수 (더 있나..?)
  1-2. 자기보다 작은 모든 수로 나누어떨어지지 않는 수
  2. 그 숫자를 템플릿 리터럴에 넣어서 반환하는 방법
*/

const primeTest = () => {
  let no = parseInt(prompt("2 이상의 숫자를 입력하세요"));
  let message = "";
  if (no === 2 || no === 3 || (no % 2 !== 0 && no % 3 !== 0)) {
    message = `${no}(은)는 소수입니다.`;
  } else {
    message = `${no}(은)는 소수가 아닙니다.`;
  }

  //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
  document.querySelector("#result").innerHTML = message;
};
