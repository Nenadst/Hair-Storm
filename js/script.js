"use strict";

const popup = document.querySelector(".popup");
const overlay = document.querySelector(".popup__overlay");
const btnClose = document.querySelector(".popup__close");
const btnsOpen = document.querySelectorAll(".btn-text");

const openPopup = function () {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePopup = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpen.length; i++)
  btnsOpen[i].addEventListener("click", openPopup);

btnClose.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !popup.classList.contains("hidden")) {
    closePopup();
  }
});
