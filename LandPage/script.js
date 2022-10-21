const toggle = document.querySelectorAll(".toggle");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll("div.menu a");

toggle.forEach((element) => {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});

links.forEach((element) => {
  element.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  breakpoints: {
    375: {
      slidesPerView: "auto",
      spaceBetween: 40,
      centeredSlides: true,
      grapCursor: true,
    },
  },
});

window.addEventListener("scroll", () => {
  if (this.window.scrollY >= 660) {
    document.querySelector("#header").classList.add("fixed");
  } else {
    document.querySelector("#header").classList.remove("fixed");
  }
});
