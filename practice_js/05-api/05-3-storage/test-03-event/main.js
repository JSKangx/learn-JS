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
// html 링크로도 one.html이 뜨게 했지만, 버튼을 눌렀을 때 window.open으로도 열리게함
function openNewWindow() {
  window.open("one.html");
  /*
    (1) 이 함수를 통해 one.html을 띄웠을 때는 local, sessionStorage 값이 둘 다 저장되어 있음. 
    (2) 왜냐? window.open으로 새 창을 띄우면 index.html의 sessionStorage 데이터가 복제되었기 때문에.
    (3) 그런데 그 이후에 데이터가 추가되어도 서로에게 영향을 미치진 않는다.
  */
}

/* 
  storage event : 로그가 two.html에서만 나온다(index, one에도 둘 다 아니다).
  (1)two.html에서는 session, local event 둘 다 발생했다.
  (2)sessionStorage event는 iframe으로 만든 창에서만 발생
  (3)localStorage event는 iframe으로 만든 창, window.open으로 연 창에서 발생
*/
window.addEventListener("storage", (event) => {
  console.log("I am index.html");
  console.log("스토리지 이벤트 발생");
  console.log(`url: ${event.url}`); // 이벤트가 발생한 html의 url
  if (event.storageArea === sessionStorage) {
    console.log("sessionStroage event 발생");
  } else if (event.storageArea === localStorage) {
    console.log("localStorage event 발생");
  }
  console.log(`key: ${event.key}, ${event.oldValue}에서 ${event.newValue}로 변경`);
});
