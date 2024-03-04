const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// faq accordion
const accordionBodyContent = document.getElementById("faq-accordion-body");
const accordionArrowDownBtn = document.getElementById("arrow-down-icon");

accordionArrowDownBtn.addEventListener("click", () => {
  if (accordionBodyContent.style.display === "block") {
    accordionBodyContent.style.display = "none";
    accordionArrowDownBtn.classList.remove("rotate-icon");
  } else {
    accordionBodyContent.style.display = "block";
    accordionArrowDownBtn.classList.add("rotate-icon");
  }
});



const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".features__container  h2", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".features__container  h4", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".featured__card", {
  ...scrollRevealOptions,
  interval: 900,
});
ScrollReveal().reveal(".latest_news_container .section__header", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".latest__news__card", {
  ...scrollRevealOptions,
  interval: 1000,
});
ScrollReveal().reveal(".client__container .section__header", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".client__card", {
  ...scrollRevealOptions,
  interval: 1000,
});

ScrollReveal().reveal(".faq__container .section__header", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".faq__accordion__card  img", {
  ...scrollRevealOptions,
  origin:"left",
  delay: 1000,
});
ScrollReveal().reveal(".faq__accordion__col", {
  ...scrollRevealOptions,
  origin:"bottom",
  interval: 1500,
});