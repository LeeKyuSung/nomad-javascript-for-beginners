const clock = document.querySelector('h2.clock');

function getDate() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getDate();
setInterval(getDate, 1000);
