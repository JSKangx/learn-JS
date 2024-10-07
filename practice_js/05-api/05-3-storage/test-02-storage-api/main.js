"use strict";

// 데이터 관리 메서드 : 세션 스토리지, 로컬 스토리지 모두 동일하게 사용 가능.
const apiTest = () => {
  sessionStorage.setItem("data1", "This is session storage data1");
  sessionStorage.data2 = "This is session storage data2";
  // 아래 두 데이터의 value는 문자열로 암묵적 타입 변환되어 저장됨.
  sessionStorage.setItem("data3", 10);
  sessionStorage.setItem("data4", {
    name: "홍길동",
    age: 10,
  });

  console.log("data1", sessionStorage.getItem("data1"));
  console.log("data2", sessionStorage.getItem("data2"));
  console.log("data3", sessionStorage.getItem("data3"), typeof sessionStorage.getItem("data3")); // data3 10 string
  console.log("data4", sessionStorage.getItem("data4"), typeof sessionStorage.getItem("data4")); // data3 [object Object] string

  // 객체를 저장하려면, 객체를 문자열로 변형해서 저장해야 제대로 이용할 수 있다.
  sessionStorage.setItem(
    "data5",
    JSON.stringify({
      name: "홍길동",
      age: 10,
    })
  );
  let data5 = JSON.parse(sessionStorage.getItem("data5"));
  console.log(data5);
};

// 데이터를 삭제할 때 사용하는 함수
const removeTest = () => {
  // 삭제하고자 하는 데이터의 키를 입력
  // sessionStorage.removeItem("data1");
  // 전체 데이터를 지울 수도 있다.
  sessionStorage.clear();
};

// 스토리지에 있는 모든 데이터를 획득해서 핸들링할 수 있다.
const getAllDataTest = () => {
  // (1) for 문으로 모든 데이터 획득
  // for (let i = 0; i < sessionStorage.length; i++) {
  //   let key = sessionStorage.key(i);
  //   console.log(key, sessionStorage.getItem(key));
  // }

  // (2) forEach 문으로 모든 데이터 획득
  let keys = Object.keys(sessionStorage);
  keys.forEach((key) => {
    console.log(key, sessionStorage.getItem(key));
  });
};
