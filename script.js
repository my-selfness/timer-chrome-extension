

const targetDate = new Date("December 31, 2024 23:59:59").getTime();

const countdown = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the target date
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(days<10){
    days = "0"+days;
  }
  if(hours<10){
    hours = "0"+hours;
  }
  if(minutes<10){
    minutes = "0"+minutes;
  }
  if(seconds<10){
    seconds = "0"+seconds;
  }
  // Display the result in the element with id="timer"
  document.getElementById("day").innerHTML = `${days}`;
  document.getElementById("hr").innerHTML = `${hours}`;
  document.getElementById("mnt").innerHTML = `${minutes}`;
  document.getElementById("sec").innerHTML = `${seconds}`;

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "DONE";
  }
}, 1000);
