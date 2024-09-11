"use strict";

const calcBonus = (name, title, salary) => {
  let bonus;
  switch (title) {
    case "A":
      bonus = salary * 0.3;
      break;
    case "B":
      bonus = salary * 0.2;
      break;
    case "C":
      bonus = salary * 0.1;
      break;
  }
  console.log(`${name}님의 추석 보너스는 ${bonus}입니다.`);
};

calcBonus("Alberto", "A", 1000);
calcBonus("Betty", "B", 500);
calcBonus("Charlie", "C", 300);
