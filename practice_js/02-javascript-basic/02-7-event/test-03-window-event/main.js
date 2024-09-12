"use strict";

let resultNode;

// 메시지를 받아 결과를 화면에 찍어주는 함수
function printResult(msg) {
  resultNode.innerHTML = msg;
}
// 로딩 완료가 되면 node를 얻어서 resultNode에 할당
addEventListener("load", () => {
  resultNode = document.getElementById("result");
  printResult("load event");
});

addEventListener("resize", () => {
  printResult(`resize, width: ${innerWidth}, height: ${innerHeight}`);
});

addEventListener("copy", (e) => {
  // 유저가 복사한 문자열에 우리가 원하는 문자열을 추가해보자
  let thisURL = document.URL; // 해당 페이지의 URL에 접근하는 메서드
  // 브라우저가 기본으로 등록해 놓은 default 이벤트가 실행되지 않게 해줘야 한다.
  /* 
    (예시 1) a 태그는 js에서 이벤트처리를 하지 않아도, 자동으로 링크 클릭 이벤트(누른 url로 이동)가 발생한다. 이건 브라우저가 기본으로 등록해 놓은 default 이벤트다.
    (예시 2) form 에서 버튼을 클릭하면, js에서 이벤트처리를 하지 않아도 자동으로 form의 action url로 유저가 입력한 데이터를 전송한다. 

    > 이런 기본 이벤트가 실행되지 않게 해 줘야 할 때(우리가 제어하려고)가 있다. 그 때 사용하는 함수다.
    > copy의 default event는 '선택한 문자열을 클립보드에 복사하는 것'이기 때문에, 그 default를 막아주면 아무리 복사 버튼을 눌러도 클립보드에 복사가 안 된다.
  */
  e.preventDefault();
  // 데이터 타입을 설정해줘야 한다.
  e.clipboardData.setData("text/plain", `${document.getSelection()} - 출처 : ${thisURL}`);
  addEventListener("paste", () => {
    printResult("paste!");
  });
});
