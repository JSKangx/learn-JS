"use strict";

// drop zone에 파일이 drop되는 순간 호출될 콜백 함수
// 파일 data를 받아 서버에 업로드하는 기능.
async function upload(files) {
  if (files.length !== 0) {
    let formData = new FormData();
    for (let file of files) {
      formData.append("file", file);
    }
    let response = await axios.post("http://localhost:8000/upload", formData);
    if (response.data.status === 200) {
      alert("Upload completed!");
    }
  }
}

// 파일이 drop되는 순간 실행될 함수
function dropHandler(e) {
  // 이 때 기본 이벤트는 브라우저가 이미지 뷰어, 텍스트 뷰어로 작동하는 것.
  e.preventDefault();
  // drop한 파일 정보를 추출하여 upload 함수의 인수로 전달.
  upload(e.dataTransfer.files); // files가 파일리스트다.
}

function dragOverHandler(e) {
  e.preventDefault();
}
