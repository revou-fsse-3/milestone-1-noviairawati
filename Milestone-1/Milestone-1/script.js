/*Menu Bar*/
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

menu.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

/*Dark/Light Mode - local storage*/

const body = document.querySelector("body"),
  toggle = document.querySelector(".toggle");
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.add("dark");
  toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});
toggle.addEventListener("click", () => toggle.classList.toggle("active"));