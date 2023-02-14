import Glide from "@glidejs/glide";

const bp = {
  xxl: 1300,
  xl: 993,
  lg: 767,
};

const carousel = new Glide("#glide", {
  type: "carousel",
  autoplay: 5000,
  keyboard: true,
  animationDuration: 1000,
  animationTimingFunc: "linear",
  focusAt: 0,
  touchRatio: 0.5,
  gap: 30,
  perView: 1,
  peek: 150,

  breakpoints: {
    [bp.xxl]: {
      peek: 118,
    },
    [bp.xl]: {
      peek: 100,
    },
    [bp.lg]: {
      peek: 0,
    },
  },
});
carousel.mount();
