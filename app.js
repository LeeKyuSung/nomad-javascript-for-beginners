const title = document.querySelector(".hello:first-child h1");
console.log(title);

function handleClick() {
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

function handleResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleResize);

function handleOffline() {
  console.log("Bye bye");
}
function handleOnline() {
  console.log("Welcome back");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
