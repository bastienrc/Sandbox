function tooglePopup() {
  const popup = document.querySelector(".content-popup");
  popup.classList.toggle("active-popup");
}

document.querySelectorAll(".toogle-popup").forEach((btn) => {
  btn.addEventListener("click", tooglePopup);
});
