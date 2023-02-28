const h1 = document.querySelector(".hello:first-child h1");

function handleClick() {
  const clickedClass = "active";
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleClick);

