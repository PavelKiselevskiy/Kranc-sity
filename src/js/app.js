import Swiper from 'swiper/bundle';
import * as flsFunctions from './modules/functions.js'; // import Swiper styles
import InputMask from './modules/inputmask.min.js';
import JustValidate from 'just-validate';
import { gsap } from "gsap";
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";



document.addEventListener("DOMContentLoaded", function () {
  
  flsFunctions.isWebp();
  
  // слайдер на главной странице
    
  const f = new Swiper(".swiper", {
    loop: !0,
    spaceBetween: 400,
    slidersPerView: 1,
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


  let validation = new JustValidate('#footer__form');

    validation
    .addField("#basic_name", [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Введите минимум два символа',
      }
    ])
    .addField("#basic_phone", [
      {
        validator: (value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Boolean(Number(phone) && phone.length > 0)
        },
        errorMessage: 'Введите телефон',
      },
      {
        validator: (value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Boolean(Number(phone) && phone.length == 10)
        },
        errorMessage: 'Введите телефон полностью',
      },

    ])


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


  // animation

  let tl = gsap.timeline();
  let tls = gsap.timeline();
  let tls1 = gsap.timeline();
  let tls2 = gsap.timeline();

  // building 
  let tls3 = gsap.timeline();
  // documents
  let tls4 = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger); 
  // mortage

  let tls5 = gsap.timeline();

  let tls6 = gsap.timeline();

  //contacts

  let tls7 = gsap.timeline();

  let tls8 = gsap.timeline();


  tl.fromTo(".header__item:first-child", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .1)
  .fromTo(".home__content", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .1)
  .fromTo(".header__item:nth-child(2)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .2)
  .fromTo(".home__decor-top", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .2)
  .fromTo(".header__item:nth-child(3)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .3)
  .fromTo(".home__mortgage", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .3)
  .fromTo(".header__item:nth-child(4)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .4)
  .fromTo(".home__decor-bottom", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .4)
  .fromTo(".header__item:nth-child(5)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .5)
  .fromTo(".header__item:nth-child(6)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .6);


  tls.fromTo(".advantages__card", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .1)
  .fromTo(".advantages__card-2", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .2)
  .fromTo(".advantages__card-3", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .3)
  .fromTo(".advantages__card-4", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .4)
  .fromTo(".advantages__card-5", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .5)
  .fromTo(".advantages__card-6", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .6);

  tls1.fromTo(".swiper", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .2)
  .fromTo(".attractions__contents", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .1)
  .fromTo(".attractions__link", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .3)
  .fromTo(".attractions__links", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .3);

  tls2.fromTo(".footer__title", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .1)
  .fromTo(".footer__descr", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .2)
  .fromTo(".footer__form", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .3)
  .fromTo(".footer__form-policy", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .4);

  tls3.fromTo(".builders__item:nth-child(2n)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .2)
  .fromTo(".builders__item:nth-child(2n + 1)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .3);

  tls4.fromTo(".documents__item:nth-child(2n)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .2)
  .fromTo(".documents__item:nth-child(2n + 1)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .3);

  tls5.fromTo(".installment__left-panel", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .2)
  .fromTo(".installment__title", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .1);

  tls6.fromTo(".installment__second-title", {opacity: 0, y: -50}, {opacity: 1, y: 0}, .2)
  .fromTo(".installment__item", {opacity: 0, y: -50}, {opacity: 1, y: 0}, .3)
  .fromTo(".installment__descr", {opacity: 0, y: -50}, {opacity: 1, y: 0}, .4);

  tls7.fromTo(".maps__container", {opacity: 0}, {opacity: 1}, 0.3);

  tls8.fromTo(".contacts__item:nth-child(1)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .1)
  .fromTo(".contacts__item:nth-child(2)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .2)
  .fromTo(".contacts__item:nth-child(3)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .3)
  .fromTo(".contacts__item:nth-child(4)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .4)
  .fromTo(".contacts__item:nth-child(5)", {opacity: 0, x: -50}, {opacity: 1, x: 0}, .5);

  ScrollTrigger.create({
    animation: tls,
    trigger: ".about",
    start: 'center center',
    end: 'bottom',
  })

  ScrollTrigger.create({
    animation: tls1,
    trigger: ".selection",
    start: 'bottom center',
    end: 'bottom',
  })

  ScrollTrigger.create({
    animation: tls2,
    trigger: ".footer__container",
    start: 'top bottom',
    end: 'bottom',
  })

  ScrollTrigger.create({
    animation: tls8,
    trigger: ".contacts",
    start: 'top bottom',
    end: 'bottom',
  })


  
  // кнопка показать еще

  let btnMore = document.querySelector('.floor__btn-more');
  let cards = Array.from(document.querySelectorAll('.card-area__item'));

  window.addEventListener('resize', event => {
    if (event.target.window.innerWidth > 989) response1();
    if (event.target.window.innerWidth <= 989 && event.target.window.innerWidth > 659) response2();
    if (event.target.window.innerWidth <= 659) response3();


  })


function openCatalog() {
 btnMore.addEventListener('click', () => {
  cards.forEach(item => item.classList.remove('hidden'));
  btnMore.classList.add('hidden');
 })
};

  function response1() {
    if (window.innerWidth > 989) {
      btnMore.classList.add('hidden');
      cards.forEach((item, index) => {
        item.classList.add('hidden')
        if (index <= 19) {
          item.classList.remove('hidden')
        } else if (index > 19) {
          btnMore.classList.remove('hidden');
        }
        openCatalog();
      })
    }
  };

  response1();


  function response2() {
    if (window.innerWidth <= 989) {
      btnMore.classList.add('hidden');
      cards.forEach((item, index) => {
        item.classList.add('hidden')
        if (index <= 11) {
          item.classList.remove('hidden')
        } else if (index > 11) {
          btnMore.classList.remove('hidden');
        }
        openCatalog();
      })
    }
  };

  function response3() {
    if (window.innerWidth <= 659) {
      btnMore.classList.add('hidden');
      cards.forEach((item, index) => {
        item.classList.add('hidden')
        if (index <= 8) {
          item.classList.remove('hidden')
        } else if (index > 8) {
          btnMore.classList.remove('hidden');
        }
        openCatalog();
      })
    }
  };

  // выбор первого дома

  // let houseOne = document.querySelector('.tooltipy-svg-1');
  // let houseTwo = document.querySelector('.tooltipy-svg-2');


  // function itemOnMouseOverHandler () {
  //   let gg = document.querySelector('.selection__tooltip-1');
  //   gg.classList.add('tooltip-active');
  // }
  // function itemOnMouseMoveHandler (e){
  //   let gg = document.querySelector('.selection__tooltip-1');
  //   let parent = houseOne;
  //   let posX = parent.getBoundingClientRect().left;
  //   let posY = parent.getBoundingClientRect().top;
   
  //   gg.style.left = e.x - posX + 230 + 'px';
  //   gg.style.top = e.y - posY - 10 + 'px';
  // };

  // function itemOnMouseOutHandler (){
  //   document.querySelector('.selection__tooltip-1').classList.remove('tooltip-active');
  // };

  // houseOne.addEventListener('mouseover', itemOnMouseOverHandler);
  // houseOne.addEventListener('mousemove', itemOnMouseMoveHandler);
  // houseOne.addEventListener('mouseout', itemOnMouseOutHandler);

  // // выбор второго дома

  // function itemOnMouseOverHandlers () {
  //   let gg = document.querySelector('.selection__tooltip-2');
  //   gg.classList.add('tooltip-active');
  // }
  // function itemOnMouseMoveHandlers (e){
  //   let gg = document.querySelector('.selection__tooltip-2');
  //   let parent = houseTwo;
  //   let posX = parent.getBoundingClientRect().left;
  //   let posY = parent.getBoundingClientRect().top;
   
  //   gg.style.left = e.x - posX + 90 + 'px';
  //   gg.style.top = e.y - posY + 20 + 'px';
  // };

  // function itemOnMouseOutHandlers (){
  //   document.querySelector('.selection__tooltip-2').classList.remove('tooltip-active');
  // };

  // houseTwo.addEventListener('mouseover', itemOnMouseOverHandlers);
  // houseTwo.addEventListener('mousemove', itemOnMouseMoveHandlers);
  // houseTwo.addEventListener('mouseout', itemOnMouseOutHandlers);




});

