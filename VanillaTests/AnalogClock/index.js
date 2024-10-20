function clock() {
  setInterval(() => {
    let d = new Date();
    secondsHand.style.transform = `rotate(${d.getSeconds() * (360 / 60)}deg)`;
    minutesHand.style.transform = `rotate(${d.getMinutes() * (360 / 60)}deg)`;
    hoursHand.style.transform = `rotate(${d.getHours() * (360 / 12)}deg)`;
  }, 1000);
}

clock();
