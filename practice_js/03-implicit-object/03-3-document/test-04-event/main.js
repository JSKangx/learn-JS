"use strict";

let area1 = document.getElementById("area1");
let area2 = document.getElementById("area2");
let area3 = document.getElementById("area3");

// bubbling 단계에서 실행할 event handler 등록
area1.addEventListener("click", function () {
  console.log("bubbling area1 event handler");
});
area2.addEventListener("click", function () {
  console.log("bubbling area2 event handler");
});
area3.addEventListener("click", function (event) {
  console.log("bubbling area3 event handler");
  event.stopPropagation(); // capturing1, 2, 3 - bubbling3 실행 후 2, 1은 실행 안 함
});

// 캡쳐링 단계에서 실행할 event handler 등록
// 캡쳐링 단계에서 실행하려면 addEventListener의 3번째 인수에 true를 넣어줘야 한다.
area1.addEventListener(
  "click",
  function (event) {
    console.log("capturing area1 event handler");
    event.stopPropagation(); // capturing1 만 실행되고 그 이후 다 취소.
  },
  true
);
area2.addEventListener(
  "click",
  function () {
    console.log("capturing area2 event handler");
  },
  true
);
area3.addEventListener(
  "click",
  function () {
    console.log("capturing area3 event handler");
  },
  true
);

let link1 = document.getElementById("link1");
let form1 = document.getElementById("form1");

link1.addEventListener("click", function (e) {
  console.log("link clicked!");
  e.preventDefault(); // 기본 이벤트(링크 클릭시 해당 페이지로 이동) 막기
});
form1.addEventListener("submit", function (e) {
  console.log("form submit");
  e.preventDefault(); // 기본 이벤트(제출시 제출한 페이지로 이동) 막기
});
