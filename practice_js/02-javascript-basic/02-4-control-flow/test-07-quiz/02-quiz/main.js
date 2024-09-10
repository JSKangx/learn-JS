"use strict";

const primeTest = () => {
  let no = prompt("2 이상의 숫자를 입력하세요");
  let num = parseInt(no);
  let message = "";
  let results = [];

  if (no === null) {
    message = "취소하셨습니다. 다시 입력해보세요.";
    // 입력값(no)이 숫자가 아니라면 num은 NaN으로 나온다. NaN은 Falsy 값이므로 !NaN은 true다.
  } else if (num < 2 || !num) {
    message = "2 이상의 숫자를 입력하세요.";
  } else {
    for (let i = 2; i < num; i++) {
      // 만약 i가 소수가 아니라면 message를 출력하는 게 아니라, isPrimeNum의 상태만 바꾸기 위해 변수 선언.
      let isPrimeNum = true;
      // i가 소수인지 i보다 작은 모든 수로 나누어보자
      for (let j = 2; j < i; j++) {
        // i가 소수가 아니라면
        if (i % j === 0) {
          isPrimeNum = false;
          break;
        }
      }
      // 소수가 아닌 i가 삽입됐을 때 내부 for문은 탈출하지만, isPrimeNum은 여전히 false인 상태. 그 상태의 i는 배열에 추가되면 안 된다.
      if (isPrimeNum) {
        results.push(i);
      }
      message = `입력하신 ${num}미만의 소수는 ${results}입니다.`;
    }
  }

  document.querySelector("#result").innerHTML = message;
};

/*
    [어떤 문을 써야하는지에 대한 판단이 훈련이다.]
    조건문 (if)
      - 입력받은 숫자가 null이 아니라면 아래의 2개 루프를 실행
      - null이라면 '취소 버튼에 대한 메시지'
    (1) 2부터 입력받은 수까지 증가시키는 loop
      - 코드 작성 시점에 몇개의 데이터가 나올지 예측이 안 되기에 나중에 결과를 담을 초기 데이터를 빈배열로 설정.
      - 2부터 증가시키는 loop를 for 문으로 작성
      - i가 소수인지 아닌지를 판단하는 변수 선언. 초기값은 true로 설정.
    (2) 증가시키는 수 'i'가 소수인지 판단하는 loop
      - 나누는 숫자를 증가시키는 loop를 반복문으로 작성
      - 나누어 떨어지는 숫자가 생기면 isPrimeNumber를 false로 선언. 루프문 종료.
      - 만약 나누어 떨어지는 숫자가 없다면(else), divisor를 증가
    (3) isPrimeNumber가 true일 때만 i를 results 배열의 요소로 추가.
    (4) 입력한 숫자와 결과 배열인 results를 화면에 출력.
  */
