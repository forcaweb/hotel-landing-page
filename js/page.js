function showMenuMobile() {
  const btn = document.getElementById("btn-menu-left");
  const btnClose = document.getElementById("btn-close");
  const menu = document.querySelector(".container-menu-right");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  btnClose.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

function converteDate(date) {
  const data = new Date(date);

  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada;
}

function openChatFormBooking() {
  const formBooking = document.getElementById("form-booking");

  formBooking.addEventListener("submit", (e) => {
    e.preventDefault();
    const checkin = e.currentTarget[0].value;
    const checkout = e.currentTarget[1].value;
    const adultsQtds = e.currentTarget[2].value;
    const childrenQtds = e.currentTarget[3].value;

    const numberWhatsapp = `https://wa.me/553591596756?text=Ol%C3%A1%2C%20estou%20vindo%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20reserva.%20Quero%20na%20Data%20${converteDate(
      checkin
    )}%20a%20${converteDate(
      checkout
    )}%20para%20${adultsQtds}%20adultos%20e%20${childrenQtds}%20crian%C3%A7as.`;

    window.location.href = numberWhatsapp;
  });
}

const swiperEl = document.querySelector(".reviews");
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  showMenuMobile();
  openChatFormBooking();
  swiperEl.initialize();
});