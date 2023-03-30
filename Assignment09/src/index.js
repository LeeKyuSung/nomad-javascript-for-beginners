const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const button = document.querySelector("button");
button.addEventListener("click", function () {
  // get random number between 0 - 16
  const randomNumber = Math.floor(Math.random() * colors.length);
  // get another random number between 0 - 16
  let randomNumber2 = Math.floor(Math.random() * colors.length);
  while (randomNumber === randomNumber2) {
    randomNumber2 = Math.floor(Math.random() * colors.length);
  }
  console.log(randomNumber, randomNumber2);
  // set back ground color using linear-gradient()
  document.body.style.background = `linear-gradient(to right, ${colors[randomNumber]}, ${colors[randomNumber2]})`;
});
