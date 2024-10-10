"use strict";

let fileNode = document.getElementById("filePicker");
let resultNode = document.getElementById("results");

fileNode.addEventListener("change", handleFile);

function handleFile(e) {
  // 이전 내용 지우고 다시 출력하기
  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }

  let files = fileNode.files; // e.target으로 얻을 수도 있다.
  // 파일의 내용을 읽어서 화면에 출력한다.
  if (files.length !== 0) {
    for (let file of files) {
      // 유저가 선택한 파일의 타입에 따라 다른 '읽기 코드'가 실행되어야 함.
      if (file.type.startsWith("text")) {
        handleTextFile(file);
      } else if (file.type.startsWith("image")) {
        handleImageFile(file);
      }
    }
  }
}

function handleTextFile(file) {
  let liNode = document.createElement("li");
  let nameNode = document.createElement("h3"); // 파일명 출력
  nameNode.innerHTML = file.name;
  liNode.appendChild(nameNode);

  // 유저가 선택한 파일을 읽기
  let reader = new FileReader();
  // 읽은 내용은 이벤트 콜백함수로 결과 받아야 함.
  // 콜백 함수를 미리 준비해 두고, reader에게 일을 시켜야(readAsText) 함
  reader.onload = function (e) {
    let pNode = document.createElement("p");
    // 파일 내의 줄바꿈(/n)도 데이터이지만, html에서는 태그에 의해서만 줄바꿈이 된다.
    // 줄바꿈을 동일하게 표현하려면 /n을 <br />로 바꾸어줘야 한다.
    // 문자열.split('구분자') : 전체 문자열을 구분자를 기준으로 나누어 배열로 리턴.
    // 배열을 다시 <br> 태그를 넣어 문자열로 리턴
    pNode.innerHTML = e.target.result.split("/n").join("<br />");
    liNode.appendChild(pNode);
    resultNode.appendChild(liNode); // 최종 화면에 출력
  };
  // 읽다가 에러가 발생한 경우에 실행될 코드
  // IO(Input-Output : file, network)는 에러 가능성이 농후해서 에러 코드를 작성해주는 것이 좋다.
  reader.onerror = function (e) {
    let pNode = document.createElement("p");
    pNode.innerHTML = "파일 읽기에 실패 했습니다.";
    liNode.appendChild(pNode);
    resultNode.appendChild(liNode);
  };
  reader.readAsText(file); // 읽기 시작 (비동기)
}

function handleImageFile(file) {
  let liNode = document.createElement("li");
  let nameNode = document.createElement("h3");
  nameNode.innerHTML = file.name;
  liNode.appendChild(nameNode);

  let reader = new FileReader();

  reader.onload = function (e) {
    let imgNode = document.createElement("img");
    imgNode.setAttribute("src", e.target.result);
    imgNode.setAttribute("width", "100");
    liNode.appendChild(imgNode);
    resultNode.appendChild(liNode);
  };

  reader.onerror = function (e) {
    let pNode = document.createElement("p");
    pNode.innerHTML = "파일 읽기에 실패 했습니다.";
    liNode.appendChild(pNode);
    resultNode.appendChild(liNode);
  };

  // base64로 인코딩된 문자열로 읽어라.
  reader.readAsDataURL(file); // 그리고 나중에 이 문자열을 img 태그로 화면에 출력할 것.
}
