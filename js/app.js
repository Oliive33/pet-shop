let loginForm = document.querySelector(".header .login-form");

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
});
let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").addEventListener("click", () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
});

window.onscroll = () => {
  loginForm.classList.remove("active");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
