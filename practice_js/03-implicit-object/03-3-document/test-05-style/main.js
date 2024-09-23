"use strict";

let area1 = document.getElementById("area1");
let area2 = document.getElementById("area2");
let area3 = document.getElementById("area3");

console.log(area1.style.width); // 200px : inline 스타일 이므로 DOM 노드에 등록 O
console.log(area2.style.width); // style 태그 내에 작성했으므로 DOM 노드에 등록 X
console.log(area3.style.width); // style 태그 내에 작성했으므로 DOM 노드에 등록 X

console.log(area1.style.height); // 200px
console.log(area1.style.backgroundColor); // teal. camel case로 써줘야 한다.

// node의 css 속성값 변경
area1.addEventListener("click", function () {
  area1.style.backgroundColor = "gray";
  area1.style.borderRadius = "20px";
});

// inline style이 아닌 외부(style 태그, stylesheet)에 선언되어 적용된 css 값을 획득할 때
console.log(getComputedStyle(area1).width); // 200px
console.log(getComputedStyle(area2).width); // 200px
console.log(getComputedStyle(area3).width); // 200px
