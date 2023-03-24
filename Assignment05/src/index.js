const h2 = document.createElement("h2");
h2.innerText = "Hello!";
document.body.appendChild(h2);

function paint() {
  const fullWidth = screen.width / 2;
  const innerWidth = window.innerWidth;
  console.log(fullWidth, innerWidth);

  if (innerWidth > fullWidth * 0.8) {
    document.body.style.backgroundColor = "yellow";
  } else if (innerWidth > fullWidth * 0.5) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "blue";
  }
}
window.addEventListener("resize", paint);

paint();
