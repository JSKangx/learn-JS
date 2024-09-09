// 산술 연산자
console.log("산술 연산자");
let data1 = 10;
let data2 = 4;
console.log(data1 + data2);
console.log(data1 - data2);
console.log(data1 * data2);
console.log(data1 / data2);
console.log(data1 % data2);

// 증감 연산자
console.log("");
console.log("증감 연산자");
let data3 = 10;
data3++;
console.log(data3);
++data3;
console.log(data3);
data3--;
console.log(data3);
--data3;
console.log(data3);

// 연산자 우선순위
console.log("");
console.log("연산자 우선순위");
let data4 = 10;
let data5 = 10;
let result1 = data4++;
let result2 = ++data5;
console.log(`선할당, 후증가. data4: ${data4}, result1: ${result1}`);
console.log(`선증가, 후할당. data5: ${data5}, result2: ${result2}`);

// 할당 연산자
console.log("");
console.log("할당(대입) 연산자");
let a1 = 10;
// a1에 10을 더한다음 그 결과를 다시 자기자신에게 대입
a1 = a1 + 10;
console.log(a1);
// 위 식은 아래와 같이 단축 가능
a1 += 10;
console.log(a1);

// + 연산자
console.log("");
console.log("+ 연산자");
console.log(10 + 20); //30
console.log("hello" + "world"); //'helloworld'
console.log("hello" + 10); // 'hello10'
console.log("10" + "20"); // '1020' 문자열
console.log(10 + "20"); // '1020'. 10을 문자열로 암묵적 타입 변환.

// 타입 변현 : 캐스팅
// 문자열을 숫자타입으로 변환시키는 메서드
console.log(10 + parseInt("20")); // 30
// 숫자타입을 문자열로 변환시키는 메서드
console.log((10).toString() + 20); // '1020'

// 비교 연산자
console.log("");
console.log("비교 연산자");
let a2 = 10;
let a3 = 10;
console.log(a2 == a3); // true
console.log(a2 != a3); // false
console.log(a2 === a3); // true
console.log(a2 !== a3); // false

a2 = 10;
a3 = "10";
console.log(a2 == a3); // true
console.log(a2 != a3); // false
console.log(a2 === a3); // false
console.log(a2 !== a3); // true

console.log(5 < 10); // true
// 숫자열과 문자열의 비교. 문자가 숫자로 변형된다면, ASKII 코드 값으로 변형시켜서 비교 연산
console.log(5 < "10"); // true
console.log("hello" < "world"); // true. ASKII 코드 값으로 변형시켜, 알파벳 순서대로 비교
console.log("이길동" < "김길동"); // false

let a4 = true;
console.log(a4);
console.log(!a4);
