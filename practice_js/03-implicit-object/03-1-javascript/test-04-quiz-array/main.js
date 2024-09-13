"use strict";

let inputNode = document.getElementById("input");
let resultNode = document.getElementById("result");
let wordArray = [];

// 배열(wordArray)을 화면에 출력하는 함수
const printArray = (array) => {
  let wordList = ``;
  array.forEach((value) => {
    wordList += `<li>${value}</li>`;
  });
  resultNode.innerHTML = wordList;
};

// 입력값을 빈배열에 추가하는 함수
const add = () => {
  wordArray.push(inputNode.value);
  printArray(wordArray);
  inputNode.value = "";
};

const map = () => {
  let result = wordArray.map((value) => {
    return value.toUpperCase();
  });
  printArray(result);
};

const filter = () => {
  let result = wordArray.filter((value) => {
    return value.length >= 5;
  });
  printArray(result);
};

const sort = () => {
  let result = wordArray.sort();
  printArray(result);
};

/*
  1. 배열의 데이터가 모든 함수에서 쓰이니까 전역변수로 빈 배열 선언
  2. input, result DOM node 획득하여 변수에 할당
  3. 추가 함수 작성
    3-1. inputNode에 입력된 value에 접근해 변수에 할당.
    3-2. 얻은 value를 빈 배열에 추가
    3-3. 배열을 화면에 출력 (화면 출력함수는 모든 버튼에 적용되니까 따로 만들자.)
    3-4. 출력하는 함수를 추가하는 함수 안에서 호출
  4. 대문자 변경 함수
    4-1. map으로 모든 원소에 대해 함수 실행하고, 그걸 변수(배열)에 할당
    4-2. 그 변수를 화면에 출력
  5. 필터 함수
    5-1. 조건 : 문자열의 길이 > 5
  6. sort 함수
*/
