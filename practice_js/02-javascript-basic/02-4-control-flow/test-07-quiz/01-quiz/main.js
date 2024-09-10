"use strict";
/*
  1. 해당 숫자가 소수인지 아닌지를 판별하는 방법
  1-1. 2나 3제외하고 2나 3으로 나누어떨어지지 않는 수 (한계가 있다)
  1-2. 자기보다 작은 모든 수로 나누어떨어지지 않는 수. 약수가 생기면 더이상 i를 증가시키지 않고 문을 탈출(break).
  2. 그 숫자를 템플릿 리터럴에 넣어서 반환하는 방법
*/

// (1) for문 사용
/*
  const primeTest = () => {
    let no = prompt("2 이상의 숫자를 입력하세요");
    let num = parseInt(no);
    // 기본값. (1) num이 2라면 for문으로 돌릴 수 없다. (2) for문 안의 if문이 실행이 안 되면, 즉, 소수라면 기본값을 출력.
    let message = `${num}은 소수입니다.`;
    if (no === null) {
      // 취소를 선택하면 나오는 메시지.
      message = "취소를 선택하셨습니다. 다시 입력해보세요.";
    } else if (num < 2 || !num) {
      // 2미만의 숫자를 입력하거나, 숫자가 아닌 것을 입력하면 나오는 메시지.
      message = "2 이상의 숫자를 입력하세요.";
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          message = `${num}은 소수가 아닙니다`;
          break;
        }
      }
    }
    //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
    document.querySelector("#result").innerHTML = message;
  };
*/

// (2) while문 사용
const primeTest = () => {
  let no = prompt("2 이상의 숫자를 입력하세요");
  let num = parseInt(no);
  // 기본값. (1) num이 2라면 for문으로 돌릴 수 없다. (2) for문 안의 if문이 실행이 안 되면, 즉, 소수라면 기본값을 출력.
  let message = `${num}은 소수입니다.`;
  if (no === null) {
    // 취소를 선택하면 나오는 메시지.
    message = "취소를 선택하셨습니다. 다시 입력해보세요.";
  } else if (num < 2 || !num) {
    // 2미만의 숫자를 입력하거나, 숫자가 아닌 것을 입력하면 나오는 메시지.
    message = "2 이상의 숫자를 입력하세요.";
  } else {
    let i = 2;
    while (i < num) {
      if (num % i === 0) {
        message = `${num}은 소수가 아닙니다.`;
        break;
      }
      i++;
    }
  }
  //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
  document.querySelector("#result").innerHTML = message;
};
