import Glide from "@glidejs/glide";

const bp = {
  xxl: 1300,
  xl: 992,
  lg: 768,
  md: 568,
  sm: 320,
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

  breakpoints: {
    [bp.xxl]: {
      peek: 250,
    },
    [bp.xl]: {
      peek: 118,
    },
    [bp.lg]: {
      peek: 100,
    },
    [bp.md]: {
      peek: 0,
    },
  },
});
carousel.mount();
