import Swiper from 'swiper/bundle';
import * as flsFunctions from './modules/functions.js'; // import Swiper styles
import InputMask from './modules/inputmask.min.js';




document.addEventListener("DOMContentLoaded", function () {
  
  flsFunctions.isWebp();
  
  // слайдер на главной странице
    
  const f = new Swiper(".swiper", {
    loop: !0,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
    },
    // autoplay: {
    //   delay: 4000,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: !0,
    },
  });

  // валидация формы

  // форма

  var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);

    const validate = new JustValidate('.footer__form', {


      colorWrong: '#FF5C00',

      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 30,
        },

        phone: {
          required: true,

          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()

            return Number(phone) && phone.length === 10
          },


        },

      },

      messages: {
        name: {
          required: 'Вы не ввели имя',
          minLength: 'Введите не менее двух символов',
          maxLength: 'Введите не более тридцати символов'
      },

        phone: {

          required: 'Вы не ввели телефон',
          function: 'Введен некорректный номер'
        },


    },


    });


  // burger

  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  let menuLinks = menu.querySelectorAll('.header__link');

  burger.addEventListener('click',

  function() {
    burger.classList.toggle('header__burger-active');
    menu.classList.toggle('header__nav-active');
    document.body.classList.toggle('stop-scroll');



  menuLinks.forEach(function(el) {
  el.addEventListener('click' , function() {
    burger.classList.remove('header__burger-active');
    menu.classList.remove('header__nav-active');
    document.body.classList.remove('stop-scroll');
    })
  })
  });


});

