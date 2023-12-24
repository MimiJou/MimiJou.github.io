AOS.init();
document.querySelector(".nav-list").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
const navBtn = document.querySelector(".nav-list-btn");
const navList = document.querySelector(".nav-list-phone");
const overlay = document.querySelector(".overlay");

navBtn.addEventListener("click", function () {
  navList.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", function () {
  navList.classList.remove("active");
  overlay.classList.remove("active");
});
