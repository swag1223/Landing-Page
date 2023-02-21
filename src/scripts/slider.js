import Glide from "@glidejs/glide";
import {
  AUTOPLAY_TIME,
  ANIMATION_DURATION,
  TOUCH_RATIO,
  GAP,
  PER_VIEW,
  SLIDER_BP,
} from "./constants";

const carousel = new Glide("#glide", {
  type: "carousel",
  autoplay: AUTOPLAY_TIME,
  keyboard: true,
  animationDuration: ANIMATION_DURATION,
  animationTimingFunc: "linear",
  touchRatio: TOUCH_RATIO,
  gap: GAP,
  perView: PER_VIEW,
  peek: 250,

  breakpoints: {
    [SLIDER_BP.XXL]: {
      peek: 250,
    },
    [SLIDER_BP.XL]: {
      peek: 180,
    },
    [SLIDER_BP.LG]: {
      peek: 150,
    },
    [SLIDER_BP.MD]: {
      peek: 0,
    },
  },
});
carousel.mount();
