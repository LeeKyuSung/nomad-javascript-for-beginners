const game = document.querySelector(".game");
const maxNumInput = document.getElementById("max-num");
const inputNumInput = document.getElementById("input-num");
const submitBtn = document.getElementById("submit-btn");
const result = document.querySelector(".game .result");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const maxNum = parseInt(maxNumInput.value);
  const randomNum = parseInt(Math.ceil(Math.random() * (maxNum + 1))) - 1;
  const inputNum = parseInt(inputNumInput.value);
  console.log(maxNum, randomNum, inputNum);

  if (
    maxNum < 1 ||
    isNaN(maxNum) ||
    isNaN(inputNum) ||
    inputNum < 0 ||
    inputNum > maxNum
  ) {
    alert("Please enter a valid number!");
    return;
  }

  result.innerHTML = `You chose: ${inputNum}, the machine chose: ${randomNum}. <br />`;
  if (inputNum === randomNum) {
    result.innerHTML += "<b>You won!</b>";
  } else {
    result.innerHTML += "<b>You lost!</b>";
  }
});
