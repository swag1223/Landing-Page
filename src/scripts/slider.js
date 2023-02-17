import Glide from "@glidejs/glide";

const bp = {
  xxl: 1300,
  xl: 1100,
  lg: 993,
  md: 568,
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
  peek: 250,

  breakpoints: {
    [bp.xxl]: {
      peek: 250,
    },
    [bp.xl]: {
      peek: 180,
    },
    [bp.lg]: {
      peek: 150,
    },
    [bp.md]: {
      peek: 0,
    },
  },
});
carousel.mount();
