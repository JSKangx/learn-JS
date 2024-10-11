// npx tsc main.ts로 컴파일 시켜서 테스트

// 데이터 타입이 지정되면 그 타입에 맞는 데이터가 대입되어야 한다.
let data: number = 10;
// data = 'hello' // 바로 에러남

// any 타입 (모든 타입의 데이터 대입 가능, 권장하지 않음. 전혀 타입이 예측이 안 되는 것에 대해서만 써야 한다.)
let data1: any = 10;
data1 = "hello";
data1 = true;
data1 = {};

// 타입 유추 기법도 제공된다. 변수 선언 시에 타입을 지정하지 않고 대입되는 데이터로 타입을 유추한다. 개발자가 지정하지 않는 것뿐이지 초기 데이터에 의해 타입이 고정된다.
let data2 = 10; // number type으로 유추
data2 = 20;
// data2 = 'hello' // 문자열을 대입하려고 하면 에러가 난다.

// 변수에서의 void. undefined 밖에 할당 안 되기 때문에 의미없다.
let data3: void = undefined;
// data3 = null; // Error.
// data3 = 10; // Error.

// 함수에서의 void. 리턴 값이 없다는 것을 명시적으로 표현
// function f1():number {} // Error. 반환값이 number라고 지정 했는데 함수 바디에 number 값을 반환하는 코드가 없다.
function f1(): number {
  return 2; // number 타입을 반환한다고 했으니 number 타입을 반환해야 한다.
}
function f2(): void {} // return 구문이 없으니까 error가 안 뜬다.

// generic : 타입을 지정해야 하는 곳에서 형식타입으로 선언, 이용하는 곳에서 구체적인 타입을 지정해서 이용. 팀의 공통 코드에서 사용하는 경우가 많음.
// 대표적으로 배열을 generic으로 선언한다.
let a1: Array<number> = [1, 2, 3];
let a2: Array<string> = ["a", "b", "c"];

// 함수를 하나 선언한다고 가정
function myFun1(arg1: number) {}
myFun1(10); // 함수의 매개변수는 number 타입으로 고정

// 함수를 만드는 개발자 입장에서 타입을 고정하지 않고 이후에 다양한 타입으로 이용되게 하고자 한다면? 나중에 타입을 고정시킨다.
function myFun2<T>(arg: T) {}
myFun2<number>(10);
myFun2<string>("hello");

// 형식 타입은 여러개 선언 가능.
function myFun3<T, A>(arg1: T, arg2: A) {}
myFun3<number, string>(10, "hello");

// typealias : type 이라는 예약어로 이름을 가진 개발자 임의 타입을 선언 가능.
let b1: { id: number; name: string };
b1 = { id: 10, name: "kim" }; // 둘 중 하나라도 없으면 에러가 난다.
let b2: { id: number; name: string };
// 위 2개의 변수는 같은 형식의 타입이 반복해서 쓰이는 경우다.
type MyObjectType = { id: number; name: string };
let b3: MyObjectType = { id: 10, name: "kim" };
let b4: MyObjectType = { id: 40, name: "lee" };

// optional : 생략 가능한 데이터에 쓴다. 주로 함수의 매개변수, 객체의 멤버에 사용
// some(10) // 매개변수 2개를 지정했는데, 하나만 넣으면 에러가 난다. (js랑 다름)
function some(arg1: number, arg2: number) {}

// 함수의 매개변수를 선언해야 하는데, 데이터를 주지 않아도 되는 매개변수가 있다면.
function some1(arg1?: number, arg2?: number) {}
some1(); // 에러 안 남.
some1(1); // 에러 안 남.
some1(1, 2); // 에러 안 남.
// some1(1, 2, 3); // 에러 남.

// 함수의 매개변수에 default 값을 지정하면 함수를 호출할 때 인수가 안 넣어졌다고 하더라도 기본값이 설정되므로, optional로 선언 못한다.
function some2(arg1: number = 0, arg2: number = 0) {} // 에러. 디폴트 !== 옵셔널
// 전부 디폴트가 있기 때문에 매개변수를 안 주어도 에러가 안 남.
some2();
some2(10);
some2(10, 20);

// 옵셔널은 함수 매개변수뿐 아니라 object literal 멤버 선언에도 자주 사용됨.
let obj1: { id: number; name: string; grade?: string };
obj1 = { id: 10, name: "kim" }; // grade는 없어도 되는 값

// &로 별개의 두 타입 연결하기
type TypeA = { id: number; name: string };
type TypeB = { age: number; address: string };
let obj2: TypeA & TypeB = { id: 10, name: "kim", age: 10, address: "seoul" };
