"use strict";

// 파일을 1개만 선택할 수 있는 태그
let fileNode1 = document.getElementById("fileInput1");
// 파일을 여러개 선택할 수 있는 태그
let fileNode2 = document.getElementById("fileInput2");
let resultNode = document.getElementById("results");

// 파일 정보를 얻어서 ul 태그 안에 출력할 것.
function handleFile(e) {
  // 이 함수가 다시 호출된다는 것은 기존 선택을 지우고 새로운 ul의 내부를 만든다는 것.
  // 그래서 내부를 지우고 다시 채워넣는다.
  // 여러개여도 반복문을 사용해서 1st child를 계속해서 지우면 결국 모두 지워진다.
  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }

  // 유저가 선택한 파일 정보 획득
  let files = e.target.files;
  if (files.length !== 0) {
    // 파일 개수만큼 반복문 실행
    for (let file of files) {
      let item = document.createElement("li");
      item.innerHTML = `file name : ${file.name}, file size : ${file.size}, modified : ${new Date(file.lastModified)}`;
      resultNode.appendChild(item);
    }
  }
}

fileNode1.addEventListener("change", handleFile);
fileNode2.addEventListener("change", handleFile);
