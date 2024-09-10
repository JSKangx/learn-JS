"use strict";

const primeTest = () => {
  let no = parseInt(prompt("2 이상의 숫자를 입력하세요"));
  let message = "";

  document.querySelector("#result").innerHTML = message;
};

/*
    [어떤 문을 써야하는지에 대한 판단이 훈련이다.]
    조건문 (if)
      - 입력받은 숫자가 null이 아니라면 아래의 2개 루프를 실행
      - null이 아니라면 '취소 버튼에 대한 메시지'
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
