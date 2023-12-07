import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { TABLET, MOB, FIVE_CARDS, THREE_CARDS, ONE_CARDS } from '../modules/consts.js';

function initBenefitsSlider() {
  if (document.querySelector('.benefits__swiper')) {
    const slider = document.querySelector('.benefits__swiper');
    const fraction = slider.parentElement.querySelector('.slider-navigation__fraction');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      loop: true,
      speed: 500,
      pagination: {
        el: fraction,
        type: 'fraction',
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
    });
  }
}

function initSuccessHistSlider() {
  if (document.querySelector('.success-hist__swiper')) {
    const slider = document.querySelector('.success-hist__swiper');
    const fraction = slider.parentElement.querySelector('.slider-navigation__fraction');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      pagination: {
        el: fraction,
        type: 'fraction',
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
    });
  }
}

function initIntroSlider() {
  if (document.querySelector('.intro__swiper')) {
    const slider = document.querySelector('.intro__swiper');
    const fraction = slider.parentElement.querySelector('.slider-navigation__fraction');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Pagination, Navigation, Autoplay],
      slidesPerView: 1,
      loop: true,
      // autoplay: true,
      autoplay: {
        delay: 4000,
      },
      speed: 1500,
      pagination: {
        el: fraction,
        type: 'fraction',
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
    });
  }
}

// ------------------- Swiper news ----------------------------//
function initNewsSlider() {
  if (document.querySelector('.news__swiper')) {
    const slider = document.querySelector('.news__swiper');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1500,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.06,
          spaceBetween: 13,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
}

function createNewsSlides(elements, countEl) {
  const newsSlider = document.querySelector('.news__slider');
  newsSlider.innerHTML = '';

  for (let indexEl = 0; indexEl < elements.length; indexEl += countEl) {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide', 'news__slide');

    for (let j = indexEl; j < indexEl + countEl && j < elements.length; j += 1) {
      const element = document.createElement('div');
      element.classList.add('news__card');
      element.innerHTML = elements[j].innerHTML;
      swiperSlide.appendChild(element);
    }

    newsSlider.appendChild(swiperSlide);
  }
}

function newsCardInnerWidth() {
  if (document.querySelectorAll('.news__card')) {
    const newsCards = document.querySelectorAll('.news__card');

    if (window.innerWidth >= TABLET) {
      createNewsSlides(newsCards, FIVE_CARDS);
    } else if (window.innerWidth < TABLET && window.innerWidth >= MOB) {
      createNewsSlides(newsCards, THREE_CARDS);
    } else if (window.innerWidth < MOB) {
      createNewsSlides(newsCards, ONE_CARDS);
    }
  }
}
// ---------------------------------------------------------//

function initSliders() {
  initBenefitsSlider();
  initSuccessHistSlider();
  initIntroSlider();

  newsCardInnerWidth();
  initNewsSlider();
}

document.addEventListener('DOMContentLoaded', initSliders);
