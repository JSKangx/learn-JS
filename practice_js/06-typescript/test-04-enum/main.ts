// 열거형 상수 선언. 이 상수로 어떤 변수의 타입을 지정하면, 그 변수는 이 상수 내에 선언된 값만 가질 수 있다.
enum Direction1 {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}
// let myDirection1: Direction1 = 10; // 10이 없기 때문에 안 돼.
let myDirection1: Direction1 = Direction1.NORTH;
let myDirection2: Direction1 = Direction1.EAST;

// 그러면 열거형 상수내의 변수로 값이 지정된 변수에 대입된 실제 값은 뭘까?
console.log(myDirection1, myDirection2); // 0 2
// 열거형 상수는 선언된 순서로 0부터 1씩 증가되는 값을 자동으로 가진다.

// 원한다면 개발자가 직접 열거형 상수 내의 변수에 값을 할당할 수 있다.
enum Direction2 {
  NORTH = 10,
  SOUTH = 20,
  EAST = 30,
  WEST,
}
// 값을 할당하지 않은 변수는 이전 변수의 값에 1을 더해서 자동 할당된다.
console.log(Direction2.NORTH, Direction2.WEST); // 10 31

// 숫자값 이외에 문자열도 열거형 상수 내의 변수에 할당할 수 있을까?
enum Direction3 {
  NORTH = "north",
  SOUTH = "south",
  EAST = "east",
  WEST = 10,
}
console.log(Direction3.NORTH, Direction3.WEST); // north 10
