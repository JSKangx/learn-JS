"use strict";

// 세션 스토리지에 데이터를 저장하는 함수
const saveSessionStorage = function () {
  sessionStorage.setItem("data1", "This is Session storage data.");
};
// 세션 스토리지에서 데이터를 가져오는 함수
const getSessionStorage = function () {
  let value = sessionStorage.getItem("data1");
  let resultDom = document.getElementById("result");
  resultDom.innerHTML = value;
};

const saveLocalStorage = function () {
  localStorage.setItem("data2", "This is Local storage data.");
};

const getLocalStorage = function () {
  let value = localStorage.getItem("data2");
  let resultDom = document.getElementById("result");
  resultDom.innerHTML = value;
};
