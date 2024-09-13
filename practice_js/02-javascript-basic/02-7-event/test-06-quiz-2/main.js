/* 
  정규 표현식 : 어떤 문자열 데이터가 내가 원하는 패턴인지 검사하는 것.
  let regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/
  regExpPassword.test : 맞으면 true, 아니면 false를 반환.
*/

/* 
  - 로그인 버튼을 눌렀을 때 id, pw 둘다 valid 한지 아닌지를 확인하기 위해 valid 상황을 여러 함수에서 공유해야 한다면 global로 변수 선언.
  - id, pw도 로그인 함수 안에서 사용해야 한다면 global로 선언.
*/

let isIdValid = true;
let isPwValid = true;
let id = "";
let pw = "";

const idCheck = function () {
  let idNode = document.getElementById("id");
  id = idNode.value;
  let idCheckMsgNode = document.getElementById("idCheckMsg");
  if (id === null || id.trim().length === 0) {
    isIdValid = false;
    idCheckMsgNode.innerHTML = "아이디는 필수입력입니다.";
  } else {
    isIdValid = true;
    idCheckMsgNode.innerHTML = "";
  }
};

const pwCheck = function () {
  let pwNode = document.getElementById("password");
  pw = pwNode.value;
  let pwCheckMsgNode = document.getElementById("pwCheckMsg");
  let regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
  if (pw === null || pw.trim().length === 0) {
    isPwValid = false;
    pwCheckMsgNode.innerHTML = "비밀번호는 필수입력입니다.";
  } else if (!regExpPassword.test(pw)) {
    isPwValid = false;
    pwCheckMsgNode.innerHTML = "비밀번호는 영문 + 숫자, 6자 이상으로 작성해주세요.";
  } else {
    isPwValid = true;
    pwCheckMsgNode.innerHTML = "";
  }
};

const submit = function () {
  idCheck();
  pwCheck();
  console.log("submit");
  if (isIdValid && isPwValid) {
    console.log("submit");
    let resultNode = document.getElementById("result");
    resultNode.innerHTML = `${id}와 ${pw}로 로그인합니다.`;
  }
};
