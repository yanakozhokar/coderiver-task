import Swiper from "swiper";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: slidesAmount(),

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function slidesAmount() {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    return 2;
  } else {
    return 4;
  }
}

export default swiper;
