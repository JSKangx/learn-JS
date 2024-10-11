// 데이터 타입이 지정되면 그 타입에 맞는 데이터가 대입되어야 한다.
var data = 10;
// data = 'hello' // 바로 에러남
// any 타입 (모든 타입의 데이터 대입 가능, 권장하지 않음. 전혀 타입이 예측이 안 되는 것에 대해서만 써야 한다.)
var data1 = 10;
data1 = "hello";
data1 = true;
data1 = {};
// 타입 유추 기법도 제공된다. 변수 선언 시에 타입을 지정하지 않고 대입되는 데이터로 타입을 유추한다. 개발자가 지정하지 않는 것뿐이지 초기 데이터에 의해 타입이 고정된다.
var data2 = 10; // number type으로 유추
data2 = 20;
// data2 = 'hello' // 문자열을 대입하려고 하면 에러가 난다.
// 변수에서의 void. undefined 밖에 할당 안 되기 때문에 의미없다.
var data3 = undefined;
// data3 = null; // Error.
// data3 = 10; // Error.
// 함수에서의 void. 리턴 값이 없다는 것을 명시적으로 표현
// function f1():number {} // Error. 반환값이 number라고 지정 했는데 함수 바디에 number 값을 반환하는 코드가 없다.
function f1() {
    return 2; // number 타입을 반환한다고 했으니 number 타입을 반환해야 한다.
}
function f2() { } // return 구문이 없으니까 error가 안 뜬다.
