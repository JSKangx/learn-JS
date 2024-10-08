"use strict";

function saveSessionStorage() {
  let key = document.getElementById("key").value;
  let value = document.getElementById("value").value;
  sessionStorage.setItem(key, value);
}

function saveLocalStorage() {
  let key = document.getElementById("key").value;
  let value = document.getElementById("value").value;
  localStorage.setItem(key, value);
}

// a태그를 클릭해서 one.html을 띄웠을 때는 localStorage 데이터에만 저장되어 있음.
function openNewWindow() {
  window.open("one.html");
  /*
    (1) 이 함수를 통해 one.html을 띄웠을 때는 local, sessionStorage 값이 둘 다 저장되어 있음. 
    (2) 왜냐? window.open으로 새 창을 띄우면 index.html의 sessionStorage 데이터가 복제되었기 때문에.
    (3) 그런데 그 이후에 데이터가 추가되어도 서로에게 영향을 미치진 않는다.
  */
}

window.addEventListener("storage", (event) => {
  console.log("I am index.html"); // 어떤 창에서 띄운 로그인지 확인하기 위함
  console.log("스토리지 이벤트 발생");
  console.log(`url: ${event.url}`); // 이벤트가 발생한 html의 url
  // 변경된 스토리지 객체가 어디인지 확인하는 조건문
  if (event.storageArea === sessionStorage) {
    console.log("sessionStroage event 발생");
  } else if (event.storageArea === localStorage) {
    console.log("localStorage event 발생");
  }
  console.log(`key: ${event.key}, ${event.oldValue}에서 ${event.newValue}로 변경`);
});

/*
  부모 문서(index.html)는 자식 문서(iframe 내의 two.html)와 자바스크립트 콘솔을 공유합니다. 따라서 two.html에서 발생한 storage 이벤트가 부모 문서의 콘솔에 로그로 출력될 수 있습니다.
*/

/*
  (1) index.html에서 localStorage를 변경
    - two.html(iframe) : 스토리지 이벤트 (O)
    - one.html(링크) : 스토리지 이벤트 (O)
    - one.html(window.open): 스토리지 이벤트 (O)
  (2) index.html에서 sessionStorage를 변경
    - two.html(iframe) : 스토리지 이벤트 (O)
    - one.html(링크) : 스토리지 이벤트 (X)
    - one.html(window.open): 스토리지 이벤트 (X)
  (3) index.html에서 one.html을 오픈
    - one.html(링크) : 로컬 데이터 복제, 세션 데이터 복제 (X)
    - one.html(window.open): 로컬, 세션 데이터 둘 다 복제 (O)
    - 하지만 그 이후에는 index.html에서 세션 스토리지 데이터를 변경해도 서로에게 영향을 미치지 않음.
*/
