"use strict";

// 모든 함수에서 사용할 빈 배열을 global로 선언
let wordArray = [];
let inputNode = document.getElementById("input");

// 매개변수로 입력한 배열을 화면에 프린트 해주는 함수
const printWord = function (array) {
  let resultNode = document.getElementById("result");
  let result = ``;
  array.forEach((value) => {
    result += `<li>${value}</li>`;
  });
  resultNode.innerHTML = result;
  inputNode.value = "";
};

// 입력한 문자열을 임의로 만든 배열 wordArray에 추가
const addWord = function () {
  let word = inputNode.value;
  wordArray.push(word);
  printWord(wordArray);
};

// 배열의 원소를 대문자로 변경하여 새 배열로 반환
const map = function () {
  let upperCase = wordArray.map((value) => {
    return value.toUpperCase();
  });
  printWord(upperCase);
};

// 조건에 맞는 원소만 골라 새 배열로 반환, 새 배열을 프린트
const filter = function () {
  let filteredArr = wordArray.filter((value) => {
    return value.length > 5;
  });
  printWord(filteredArr);
};

// 원본배열 wordArray를 오름차순으로 정렬.
const sort = function () {
  wordArray.sort();
  printWord(wordArray);
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
