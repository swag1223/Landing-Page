import Glide, {
  Controls,
  Breakpoints,
  Swipe,
  Autoplay,
  Keyboard,
} from "@glidejs/glide/dist/glide.modular.esm";

var carousel = new Glide(".glide", {
  type: "carousel",
  autoplay: 1000,
  keyboard: true,
  animationDuration: 3000,
  animationTimingFunc: "linear",
  touchRatio: 0.5,
  perView: 1,
  gap: 30,
});
carousel.mount({ Controls, Breakpoints, Swipe, Autoplay, Keyboard });
