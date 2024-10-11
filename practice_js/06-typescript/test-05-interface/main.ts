/* 
  (1) TS에서 interface는 다른 언어처럼 class에 어떤 멤버가 꼭 선언되어 있게 강제하기 위해 주로 사용된다.
  (2) 다른 interface를 상속받을 수 있다.
  (3) 클래스와 관련없이 객체의 타입을 지정하는 용도로도 사용이 가능하다.
*/

// (3) 타입 지정부터 알아보자.
// 굳이 interface를 안 해도 이건 된다. 그래서 이런 목적으로 interface를 쓰는 건 별 의미가 없다.
interface MyInterface {
  id: number;
  name: string;
}

let myData1: MyInterface = { id: 10, name: "Jinsu" };

// 타입 나열을 , 로 하지않고 ;로 해도 된다. (prettier 때문에 ,가 ;로 자동변환됨;;)
interface MyInterface2 {
  id: number;
  name: string;
}
let myData2: MyInterface2 = { id: 10, name: "Jinsu" };

// (2) 다른 interface를 상속 받을 수 있다.
interface MyInterface3 extends MyInterface2 {
  age: number;
}
let myData3: MyInterface3 = { id: 10, name: "Jinsu", age: 10 }; // 상속받은 것 + 자신의 것

// 함수에서 매개변수와 리턴값의 타입을 강제할 수 있다.
// 어떤 함수가 매개변수로 함수를 받아야 할 때 주로 사용.
// function myFunc1(argFun: (arg1: number): number) {} // 이렇게 선언하는 건 지원하지 않는다.
// interface를 사용하여 지정
interface MyFunType {
  // 매개변수의 값은 number, 리턴값도 number인 함수 형태
  (arg1: number): number;
}
function f1(argFun: MyFunType) {}
f1((no: number) => 10);

// (1) interface를 클래스에서 사용하는 경우
// interface에 멤버를 선언하여 멤버의 타입을 강제한다. 그러나 함수를 정의하는 것은 아니다.
// interface를 선언
interface MyClassInterface1 {
  data1: number;
  fun1(): boolean;
}
interface MyClassInterface2 {
  data2: number;
  fun2(): boolean;
}
// interface를 사용하여 클래스를 정의
class MyClass implements MyClassInterface1, MyClassInterface2 {
  // 이 클래스 내에는 1, 2에 선언된 멤버가 다 포함되어야 한다.
  data1: number = 10;
  data2: number = 20;
  fun1(): boolean {
    return true;
  }
  fun2(): boolean {
    return false;
  }
}
