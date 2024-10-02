"use strict";

let buttonNode = document.getElementById("button");
let resultNode = document.getElementById("result");

// 현재 시각 얻기를 매초해야 하니까, 이것이 함수 안으로 들어가야 한다.

function showAndHide() {
  if (buttonNode.innerHTML === "show") {
    buttonNode.innerHTML = "hide";
    // setInterval(() => {
    //   let date = new Date();
    //   let nowTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    //   resultNode.innerHTML = nowTime;
    // }, 1000);
  } else {
    buttonNode.innerHTML = "show";
    resultNode.innerHTML = "";
  }
}
