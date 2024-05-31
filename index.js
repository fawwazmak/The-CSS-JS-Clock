let secondHand = document.getElementById("second");
let minuteHand = document.getElementById("minutes");
let hourHand = document.getElementById("hour");
let digitalHour = document.getElementById("digital-hour");
let digitalMinute = document.getElementById("digital-minute");
let digitalSecond = document.getElementById("digital-second");
// console.log(myScreenWidth);

const countSeconds = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  let secondDegree = (seconds / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  digitalSecond.innerHTML = seconds.toString().padStart(2, "0");
};

setInterval(countSeconds, 1000);

function countMinutes() {
  const date = new Date();
  const minutes = date.getMinutes();
  let minutesDegree = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  
  let myScreenWidth = window.screen.width;
  if (myScreenWidth > 240) {
    digitalMinute.innerHTML = minutes.toString().padStart(2, "0") + ":";
  } else {
    digitalMinute.innerHTML = minutes.toString().padStart(2, "0");
  }
}

setInterval(countMinutes, 1000);

setInterval(() => {
  const date = new Date();
  const hour = date.getHours() % 12;

  let hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  
  let myScreenWidth = window.screen.width;
  if (myScreenWidth > 240) {
    digitalHour.innerHTML = hour.toString().padStart(2, "0") + ":";
  } else {
    digitalHour.innerHTML = hour.toString().padStart(2, "0");
  }
}, 1000);
