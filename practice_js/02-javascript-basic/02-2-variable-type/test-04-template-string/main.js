let name = "홍길동";
const calSum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

/*
  문자열 데이터. 줄바꿈을 할 때는 일반 따옴표가 아닌 템플링 스트링을 써야 한다.
  하지만 브라우저에 출력될 때는 줄바꿈이 되어 나오지는 않는다.
  줄바꿈을 하려면 <br /> 태그를 써야 한다.
*/
// let string = `
//   Hello,
//   world!
// `;

// 템플릿 스트링을 활용하여 문자열과 동적 데이터를 표현해보기
// name이라는 api는 window라는 전역 객체에 이미 name 변수가 있기에, 변수로 사용하길 권장되지 않는다.
document.write(`
  안녕하세요 ${name}님, 함수 호출 결과는 ${calSum(10)}입니다.
`);

// 표현식이 아닌 문은 동적 데이터에 들어갈 수 없다.
// let a = `${let data = 10}`;
