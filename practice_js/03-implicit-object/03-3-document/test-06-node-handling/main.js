"use strict";

let result1 = document.getElementById("result1");

// (1) innerHTML로 추가 : 짧으니까 좋긴하지만
result1.innerHTML = '<div><a href="#">Link</a> hello</div>';

// (2) 위와 똑같은 걸 creat 함수로 추가 : 내용물이 바뀐다면 유지보수성이 훨씬 좋다.
let newDiv = document.createElement("div");
let newA = document.createElement("a");
let newHref = document.createAttribute("href");
newHref.value = "#";
let newAText = document.createTextNode("Link");
let newDivText = document.createTextNode(" hello");
// 조합
newA.setAttributeNode(newHref);
newA.appendChild(newAText);
newDiv.appendChild(newA);
newDiv.appendChild(newDivText);
// 화면에 출력
let result2 = document.getElementById("result2");
result2.appendChild(newDiv);
