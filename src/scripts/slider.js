
import Glide, { Controls, Breakpoints , Swipe, Autoplay , Keyboard} from '@glidejs/glide/dist/glide.modular.esm'

new Glide('.glide',{
    type: 'carousel',
    autoplay:3000,
    keyboard:true,
    animationDuration: 1000,
    animationTimingFunc: 'linear',
    perView: 1,
    gap:  20,
    
    // peek: { before: 100, after: 100 },
    // startAt: 0,
    // perView: 3,

      breakpoints:{ 
        992: {
        peek: { before: 100, after: 100 },
        startAt: 0,
        perView: 1,
      },

      568: {
        perView:1,
      }
    }
    

}).mount({ Controls, Breakpoints , Swipe, Autoplay , Keyboard})

