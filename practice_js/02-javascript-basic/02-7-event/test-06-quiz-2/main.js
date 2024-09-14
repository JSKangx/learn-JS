/* 
  정규 표현식 : 어떤 문자열 데이터가 내가 원하는 패턴인지 검사하는 것.
  let regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/
  regExpPassword.test : 맞으면 true, 아니면 false를 반환.
*/

/* 
  - 로그인 버튼을 눌렀을 때 id, pw 둘다 valid 한지 아닌지를 확인하기 위해 valid 상황을 여러 함수에서 공유해야 한다면 global로 변수 선언.
  - id, pw도 로그인 함수 안에서 사용해야 한다면 global로 선언.
*/

// 전역에서 사용할 변수 선언
let isIdValid = true;
let isPwValid = true;
let id = "";
let pw = "";

// DOM node 획득
let idNode = document.getElementById("id");
let pwNode = document.getElementById("password");
let resultNode = document.getElementById("result");
let btnNode = document.getElementById("loginBtn");

// 아이디 유효성 검사하는 함수
const idCheck = function () {
  let userID = idNode.value;
  id = userID;
  let errorMsg = document.getElementById("idErrorMsg");
  if (userID === null || userID.trim().length === 0) {
    errorMsg.innerHTML = "아이디는 필수 입력입니다.";
    isIdValid = false;
  } else {
    errorMsg.innerHTML = "";
    isIdValid = true;
  }
};
// 아이디 유효성 검사하는 함수를 이벤트의 콜백으로 전달.
idNode.addEventListener("blur", idCheck);

// 비밀번호 유효성 검사하는 함수
const pwCheck = function () {
  let userPW = pwNode.value;
  pw = userPW;
  let errorMsg = document.getElementById("pwErrorMsg");
  let regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;

  if (userPW === null || userPW.trim().length === 0) {
    errorMsg.innerHTML = "비밀번호는 필수 입력입니다.";
    isPwValid = false;
  } else if (!regExpPassword.test(userPW)) {
    isPwValid = false;
    errorMsg.innerHTML = "비밀번호는 문자+숫자 조합으로, 6자 이상입니다.";
  } else {
    isPwValid = true;
    errorMsg.innerHTML = "";
  }
};
// 비밀번호 유효성 검사 함수를 이벤트의 콜백으로 전달
pwNode.addEventListener("blur", pwCheck);

// 로그인시 id, pw 유효성 검사를 실행하고 id, pw를 화면에 출력
btnNode.addEventListener("click", () => {
  idCheck();
  pwCheck();
  if (isIdValid && isPwValid) {
    resultNode.innerHTML = `${id}, ${pw}로 로그인을 시도합니다.`;
  }
});
