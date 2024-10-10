"use strict";

let button = document.getElementById("button");
let fileNode = document.getElementById("filePicker");
let titleNode = document.getElementById("title");

// 업로드 버튼 클릭 되었을 때 콜백으로 쓸 비동기 업로드 함수 정의.
async function upload(e) {
  e.preventDefault();
  let title = titleNode.value;
  let files = fileNode.files;
  // 파일을 추가한 적이 있는 경우
  if (files.length !== 0) {
    // FormData로 서버에 전송할 데이터를 구성(일반 데이터도 추가 가능)한다.
    let formData = new FormData();
    // 업로드한 모든 파일을 formData에 계속 붙인다.
    for (let file of files) {
      formData.append("file", file); // append('키', 데이터). 서버에서 file을 받을 키를 'file'로 해두었기에 그렇게 맞췄다.
    }
    formData.append("title", title); // 일반 데이터도 넘길 것

    // 데이터를 넘길 정보 지정 post(url, 넘길 데이터)
    let response = await axios.post("http://localhost:8000/upload", formData);
    // 상태가 200번 : ok인 경우
    if (response.data.status === 200) {
      alert("upload OK!");
    }
  }
}

button.addEventListener("click", upload);
