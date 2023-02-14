const popup = document.querySelector(".popup"),
  showPopup = document.querySelector(".show"),
  closePopup = document.querySelector(".close"),
  progress = document.querySelector(".progress");

setTimeout(() => {
  popup.classList.add("active");
}, 4000);

setTimeout(() => {
  popup.classList.remove("active");
}, 14000);

setTimeout(() => {
  progress.classList.remove("active");
}, 14300);

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);
});
