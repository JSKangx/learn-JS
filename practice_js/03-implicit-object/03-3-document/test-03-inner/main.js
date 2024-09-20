"use strict";

// innerHTML vs innerText
let oneNode = document.getElementById("one");
console.log(oneNode.innerHTML); // 'hello'
console.log(oneNode.innerText); // 'hello'

let twoNode = document.getElementById("two");
console.log(twoNode.innerHTML); // <a href="#">google</a>
console.log(twoNode.innerText); // google

// 특정 노드의 바디에 문자열을 추가해서 출력해보자.
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

result1.innerHTML = '<a href="#">google</a>'; // link 생성
result2.innerText = '<a href="#">google</a>'; // 이 내용이 텍스트로 삽입

// 속성 핸들링
let link1 = document.getElementById("link1");
// (1) 속성 접근
console.log(link1.href); // http://www.google.com/
// 정식으로 함수를 사용해 얻는 법
console.log(link1.getAttribute("href")); // http://www.google.com
// (2) 속성 변경
let link2 = document.getElementById("link2");
// link2.href = "http://www.naver.com";
link2.setAttribute("href", "http://www.naver.com");
// (3) 속성 제거
let link3 = document.getElementById("link3");
console.log(link3.hasAttribute("href")); // true
link3.removeAttribute("href"); // href 속성 제거
console.log(link3.hasAttribute("href")); // false
