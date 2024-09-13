/* 
  정규 표현식 : 어떤 문자열 데이터가 내가 원하는 패턴인지 검사하는 것.
  let regExpPassword = /^(?-.*[a-zA-Z])(?=.*[0-9]).{6,16}$/
  regExpPassword.test : 맞으면 true, 아니면 false를 반환.
*/

/* 
  - 로그인 버튼을 눌렀을 때 id, pw 둘다 valid 한지 아닌지를 확인하기 위해 valid 상황을 여러 함수에서 공유해야 한다면 global로 변수 선언.
  - id, pw도 로그인 함수 안에서 사용해야 한다면 global로 선언.
*/

// DOM node 획득
let idNode = document.getElementById("id");
let pwNode = document.getElementById("password");
let idValidNode = document.getElementById("id-valid");
let pwValidNode = document.getElementById("pw-valid");

// 유효성 검사한 결과를 화면에 띄우는 함수
const printValidId = (msg) => {
  idValidNode.innerHTML = msg;
};
const printValidPw = (msg) => {
  pwValidNode.innerHTML = msg;
};

// 아이디가 유효한지 검사하는 조건문
idNode.addEventListener("blur", (e) => {
  if (!e.target.value) {
    printValidId("아이디는 필수입력입니다.");
  } else {
    printValidId("");
  }
});

// 비밀번호가 입력되었는지 검사하는 조건문
pwNode.addEventListener("blur", (e) => {
  let regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
  if (!e.target.value) {
    printValidPw("비밀번호는 필수입력입니다.");
  } else if (e.target.value && !regExpPassword.test()) {
    printValidPw("비밀번호는 영문자, 숫자 조합, 6자 이상이어야 합니다.");
  } else {
    printValidPw("");
    console.log(pwNode.value);
  }
});
