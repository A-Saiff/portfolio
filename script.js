const netflix = document.getElementById("net");
const tic = document.getElementById("tic");
const email = document.getElementById("email");

function toggleContent(elementId) {
  const content = document.getElementById(elementId);
  if (content.classList.contains("hide")) {
    content.style.height = content.scrollHeight + 20 + "px";
  } else {
    content.style.height = "0";
  }
  content.classList.toggle("hide");
}

netflix.addEventListener("click", () => toggleContent("netflix"));
tic.addEventListener("click", () => toggleContent("tictactoe"));
email.addEventListener("click", () => toggleContent("emailvalid"));

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

const mode = document.querySelector(".mode");
const root = document.documentElement;

mode.addEventListener("click", () => {
  if (getComputedStyle(root).getPropertyValue("--bgcolor") == "black") {
    root.style.setProperty("--bgcolor", "white");
    root.style.setProperty("--textcolor", "black");
    root.style.setProperty("--navbg", "rgb(235, 235, 235)");
    mode.innerHTML = "Dark theme";
  } else {
    root.style.setProperty("--bgcolor", "black");
    root.style.setProperty("--textcolor", "white");
    root.style.setProperty("--navbg", "rgb(20, 20, 20)");
    mode.innerHTML = "Light theme";
  }
});
