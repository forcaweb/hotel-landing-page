document.addEventListener("DOMContentLoaded", () => {
  showMenuMobile();
});

function showMenuMobile() {
  const btn = document.getElementById("btn-menu-left");
  const btnClose = document.getElementById('btn-close');
  const menu = document.querySelector(".container-menu-right");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  btnClose.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
