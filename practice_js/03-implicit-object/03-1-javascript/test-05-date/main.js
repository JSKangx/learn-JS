"use strict";

// (1) 현재 시각, 날짜 데이터 획득하기
let date1 = new Date(); // new 생성자로 date 객체 생성.
console.log(date1.toString());
console.log(date1.toLocaleString()); // locale : 실행되는 언어 환경에 맞게

// (2) 특정 시각을 지정해서 생성
// 그냥 문자열을 전달하는 것과는 다르다. Date 객체를 전달하는 것이기 때문에 date객체에 사용할 수 있는 메서드를 사용할 수 있다.
let date2 = new Date("2024-09-19T10:15:10"); // T를 넣는 것이 좀 더 최신 문법. 빼도 그대로 작동하지만, 브라우저나 자바스크립트 엔진에 따라 다르게 동작할 가능성도 있음.
console.log(date2.toLocaleString());
let date3 = new Date(2024, 9, 19, 10, 15, 20);
console.log(date3.toLocaleString());

// (3) 특정 데이터만 추출
console.log("year : ", date1.getFullYear()); // year :  2024
console.log("month : ", date1.getMonth()); // month :  8 (9월)
console.log("date : ", date1.getDate()); // date :  19
console.log("day : ", date1.getDay()); // day :  4 (목요일)
console.log("seconds : ", date1.getSeconds()); // seconds :  48
console.log("timestamp: ", date1.getTime()); // timestamp:  1726708908408
// date2는 그냥 문자열을 전달한 게 아니다. date 객체 메서드 사용 가능.
console.log("date2.year : ", date2.getFullYear()); // date2.year :  2024

// (4) 날짜 비교
let eventStartDate = new Date("2024-09-01T00:00:00");
let eventEndDate = new Date("2024-09-30T23:59:59");

// 예약 시간
let regDate = new Date("2024-09-10T14:00:00");

// 이벤트 기간과 예약시간 비교
if (regDate.getTime() < eventStartDate.getTime()) {
  console.log("예약하신 시각은 이벤트 시작 전입니다.");
} else if (regDate.getTime() > eventEndDate.getTime()) {
  console.log("예약하신 시각은 이벤트 종료 후 입니다.");
} else {
  console.log(`${regDate.toLocaleString()}(으)로 예약이 완료 되었습니다.`);
}
