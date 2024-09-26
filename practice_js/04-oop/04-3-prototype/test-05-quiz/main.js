"use strict";

// School 생성자 함수 정의
function School(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}
// Schoo.prototype에 sum 함수와 avg 함수 정의
School.prototype.sum = function () {
  return parseInt(this.kor + this.eng);
};
School.prototype.avg = function () {
  return Math.round(parseInt(this.sum()) / 2);
};
// school1 객체 생성
let school1 = new School(100, 85);
console.log("school sum", school1.sum());
console.log("school avg", school1.avg());

// HighSchool 생성자 함수 정의
function HighSchool(kor, eng) {
  // School 생성자 함수의 멤버(kor, eng)를 상속 받음
  School.apply(this, [kor, eng]);
}
// HighSchool의 prototype을 School의 prototype으로 교체
HighSchool.prototype = School.prototype;
// grade 함수를 독자적인 prototype에 정의
HighSchool.prototype.grade = function () {
  let grade = "";
  if (this.avg() >= 90) grade = "A";
  else if (this.avg() >= 80) grade = "B";
  else if (this.avg() >= 70) grade = "C";
  else if (this.ave() >= 60) grade = "D";
  else grade = "F";
  return grade;
};
// high1 객체 생성
let high1 = new HighSchool(100, 85);
console.log("highschool sum", high1.sum());
console.log("highschool avg", high1.avg());
console.log("highschool grade", high1.grade());
console.dir(high1);
