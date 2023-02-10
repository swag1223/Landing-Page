import Glide from "@glidejs/glide";

const carousel = new Glide(".glide", {
  type: "carousel",
  autoplay: 5000,
  keyboard: true,
  animationDuration: 1000,
  animationTimingFunc: "linear",
  touchRatio: 0.5,
  gap: 30,

  breakpoints: {
    568: {
      perView: 1,
      peek: 0,
    },
    768: {
      peek: 100,
    },
    992: {
      peek: 120,
    },
    4000: {
      peek: 200,
    },
  },
});
carousel.mount();
