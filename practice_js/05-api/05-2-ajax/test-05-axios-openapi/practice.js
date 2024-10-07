"use strict";

let button = document.getElementById("button");
let table = document.getElementById("result");

// xhr로 작성한 코드를 axios를 사용하여 재작성해보자.
button.addEventListener("click", function () {
  let url = "http://openapi.seoul.go.kr:8088/67436a4547696e6a33344d4e50434e/json/RealtimeCityAir/1/99/";
  axios.get(url).then((response) => {
    let rows = response.data.RealtimeCityAir.row;
    let resultTxt = "";
    for (let i = 0; i < rows.length; i++) {
      let name = rows[i]["MSRSTE_NM"];
      let value = rows[i]["IDEX_MVL"];
      let grade = rows[i]["IDEX_NM"];

      resultTxt += `
        <tr>
          <td>${name}</td>
          <td>${value}</td>
          <td>${grade}</td>
        </tr>
      `;
    }
    table.innerHTML = resultTxt;
  });

  // let xhr = new XMLHttpRequest();
  // xhr.open("get", "http://openapi.seoul.go.kr:8088/67436a4547696e6a33344d4e50434e/json/RealtimeCityAir/1/99/", true);
  // xhr.onload = function () {
  //   let result = xhr.responseText;
  //   let resultObj = JSON.parse(result);

  //   let rows = resultObj["RealtimeCityAir"]["row"];
  //   let resultTxt = "";
  //   for (let i = 0; i < rows.length; i++) {
  //     let name = rows[i]["MSRSTE_NM"];
  //     let value = rows[i]["IDEX_MVL"];
  //     let grade = rows[i]["IDEX_NM"];

  //     resultTxt += `
  //       <tr>
  //         <td>${name}</td>
  //         <td>${value}</td>
  //         <td>${grade}</td>
  //       </tr>
  //     `;
  //   }
  //   table.innerHTML = resultTxt;
  // };
  // xhr.send();
});
