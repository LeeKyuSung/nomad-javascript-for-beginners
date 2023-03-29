const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const christMasDay = new Date("2023-12-25:00:00:00+0900");
  const today = new Date();

  const diff = christMasDay - today;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const dayFormat = days.toLocaleString("en-US", {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
  const hourFormat = hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const minuteFormat = minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const secondFormat = seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  clockTitle.innerText = `${dayFormat}d ${hourFormat}h ${minuteFormat}m ${secondFormat}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
