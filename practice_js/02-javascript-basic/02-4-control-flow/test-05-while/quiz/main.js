"use strict";

let i = 1;
// inner 루프문
while (i <= 9) {
  document.write("<div>");
  document.write(`<h3>${i}단</h3>`);
  // outer 루프문이 다시 돌릴 때마다 j를 1로 복귀시켜줘야 하기에, outer 루프문 안에 작성해야 한다.
  let j = 1;
  while (j <= 9) {
    document.write(`${i} X ${j} = ${i * j}<br />`);
    j++;
  }
  i++;
  document.write("</div>");
}
