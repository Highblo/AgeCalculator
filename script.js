let userInput = document.getElementById("date");
let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", calculateAge);

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  let today = new Date();

  let nowDay = today.getDate();
  let nowMonth = today.getMonth() + 1;
  let nowYear = today.getFullYear();

  let differenceDay, differenceMonth, differenceYear;

  differenceYear = nowYear - birthYear;

  if (nowMonth >= birthMonth) {
    differenceMonth = nowMonth - birthMonth;
  } else {
    differenceYear--;
    differenceMonth = 12 + nowMonth - birthMonth;
  }

  if (nowDay >= birthDay) {
    differenceDay = nowDay - birthDay;
  } else {
    differenceMonth--;
    differenceDay = getDaysInMonth(birthYear, birthMonth) + nowDay - birthDay;
  }

  if (differenceMonth < 0) {
    differenceMonth = 11;
    differenceYear--;
  }

  result.innerHTML = `You are <span>${differenceYear}</span> years <span>${differenceMonth}</span> months and <span>${differenceDay}</span> days old`;

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
}
