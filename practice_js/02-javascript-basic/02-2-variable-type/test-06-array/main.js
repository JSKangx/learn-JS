// 여러개의 데이터를 각각 변수에 할당.
let user1 = "Alberto";
let user2 = "Betty";
let user3 = "Charlie";

// 여러개의 데이터가 같은 성격을 가지고 있다면 배열로 구성해 하나의 변수에 할당하는 것이 좋다.
let userNames = ["Alberto", "Betty", "Charlie"];
console.log(userNames.length); // 3
console.log(userNames[0]); // "Alberto"
console.log(userNames[1]); // "Betty"
console.log(userNames[2]); // "Charlie"
console.log(userNames[3]); // undefined
console.log(userNames); // ["Alberto", "Betty", "Charlie"]

// 배열 데이터 변경하기
userNames[2] = "Fred";
console.log(userNames); // ["Alberto", "Betty", "Fred"]

// push 메서드: 신규 데이터를 맨 마지막 인덱스로 추가
userNames.push("Ellen");
userNames.push("George");
console.log(userNames); // ["Alberto", "Betty", "Fred", "Ellen", "George"]

// pop 메서드 : 맨 뒤에 있는 인덱스를 삭제
userNames.pop();
console.log(userNames); // ["Alberto", "Betty", "Fred", "Ellen"]
