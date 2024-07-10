const netflix = document.getElementById("net");
const tic = document.getElementById("tic");

const email = document.getElementById("email");
netflix.addEventListener("click", () => {
  document.getElementById("netflix").classList.toggle("hide");
});

tic.addEventListener("click", () => {
  document.getElementById("tictactoe").classList.toggle("hide");
});

email.addEventListener("click", () => {
  document.getElementById("emailvalid").classList.toggle("hide");
});

let startDate = new Date("2023-08-01T00:00:00");
let time = document.getElementById("time");
let currentDate = new Date();
let differenceInMilliseconds = currentDate - startDate;
let differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
time.innerHTML = differenceInSeconds;
setInterval(() => {
  currentDate = new Date();
  differenceInMilliseconds = currentDate - startDate;
  differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  time.innerHTML = differenceInSeconds;
}, 1000);
