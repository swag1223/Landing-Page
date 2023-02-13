import Glide from "@glidejs/glide";

const carousel = new Glide(".glide", {
  type: "carousel",
  autoplay: 5000,
  keyboard: true,
  animationDuration: 1000,
  animationTimingFunc: "linear",
  touchRatio: 0.5,
  gap: 30,
  perView: 1,

  breakpoints: {
    1300: {
      peek: 250,
    },
    992: {
      peek: 118,
    },
    768: {
      peek: 100,
    },
    568: {
      peek: 0,
    },
  },
});
carousel.mount();
