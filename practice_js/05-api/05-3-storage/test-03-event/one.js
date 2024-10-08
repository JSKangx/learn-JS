window.addEventListener("storage", (event) => {
  console.log("I am one.html"); // 어떤 창에서 띄운 로그인지 확인하기 위함
  console.log("스토리지 이벤트 발생");
  console.log(`url: ${event.url}`);
  // 변경된 스토리지 객체가 어디인지 확인하는 조건문
  if (event.storageArea === sessionStorage) {
    console.log("sessionStroage event 발생");
  } else if (event.storageArea === localStorage) {
    console.log("localStorage event 발생");
  }
  console.log(`key: ${event.key}, ${event.oldValue}에서 ${event.newValue}로 변경`);
});
