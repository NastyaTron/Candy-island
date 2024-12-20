import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = new Swiper('.swiper', {
    
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
               1200: {
          slidesPerView: 3,
          spaceBetween: 0, 
        }
    }
    
  });

 