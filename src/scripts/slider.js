
import Glide, { Controls, Breakpoints , Swipe, Autoplay , Keyboard} from '@glidejs/glide/dist/glide.modular.esm'

const carousel = new Glide('.glide',{
    type: 'carousel',
    autoplay:3000,
    keyboard:true,
    animationDuration: 1000,
    animationTimingFunc: 'linear',
    touchRatio:0.5,
    perView: 1,
    gap:  30,
    // peek: {
    //           before: 50,
    //           after: 50
    //         }
    

    Breakpoints:{ 
      568:{
        perView:1,
      },
      768:{
        perView:1,

      },
      992: {
        gap:50,
        startAt: 0,
        perView: 1,
        peek: {
          before: 50,
          after: 50
        }
      },
    }
    

});
carousel.mount({ Controls, Breakpoints , Swipe, Autoplay , Keyboard})

