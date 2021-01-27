"use strict";
////////////////////////////////////////
// Page navigation

document.querySelector(".nav__list").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

////////////////////////////////////////
// Popup

const popup = document.querySelector(".popup");
const overlay = document.querySelector(".popup__overlay");
const btnClose = document.querySelector(".popup__close");
const btnsOpen = document.querySelectorAll(".btn-text");

const openPopup = function (e) {
  e.preventDefault();
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePopup = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpen.forEach((btn) => btn.addEventListener("click", openPopup));

// for (let i = 0; i < btnsOpen.length; i++)
//   btnsOpen[i].addEventListener("click", openPopup);

btnClose.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !popup.classList.contains("hidden")) {
    closePopup();
  }
});

////////////////////////////////////////
// Sticky navigation

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

////////////////////////////////////////
// Map
const map = L.map("map").setView([44.81366, 20.47054], 16);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([44.81366, 20.47054])
  .addTo(map)
  .bindPopup("Studio lepote Hair Storm<br> Koste Stojanovića br.8")
  .openPopup();

////////////////////////////////////////
// Hamburger

const burger = document.querySelector(".header__hamburger");
const navi = document.querySelector(".nav__list");

burger.addEventListener("click", () => {
  navi.classList.toggle("active");
  navi.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});
