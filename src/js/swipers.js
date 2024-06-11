import Swiper from "swiper";
import {EffectCoverflow} from "swiper/modules";

const transitionSlide = () => {

}

const presentationNextSlide = document.querySelectorAll(".presentationNextSlide")
const presentationPrevSlide = document.querySelectorAll(".presentationPrevSlide")

const swiperDepartment = new Swiper('.wrapper_swiperDepartment', {
    wrapperClass: 'swiperDepartment_wrapper',
    slidesPerView: 1,
    slideClass: 'swiperDepartment_item',
    effect: "coverflow",
    modules: [EffectCoverflow],
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
        rotate: 0, // Угол поворота слайдов
        stretch: 400, // Степень растяжения слайдов
        depth: 100, // Глубина наложения слайдов
        modifier: 1, // Модификатор масштабирования
        slideShadows: false, // Отключение теней
        scale: 0.8 // Масштаб неактивных слайдов
    },
})

const presentationSwiper = new Swiper('.body_swiper', {
    wrapperClass: 'body_swiperWrapper',
    slideClass: "body_swiperWrapperItem",
    slidesPerView: 1,
    spaceBetween: 10,
})

presentationNextSlide.forEach((slide, index) => {
  slide.addEventListener("click", () => {
      console.log(presentationSwiper)
      presentationSwiper[index + 1].slideNext()
    })
})


presentationPrevSlide.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        presentationSwiper[index + 1].slidePrev()
    })
})

const componentSwiper = new Swiper('.wrapper_swiper_component', {
    wrapperClass: 'swiper_wrapper',
    slideClass: "swiperComponent_item",
    slidesPerView: 2,
    spaceBetween: 30,
})

componentSwiper.forEach(swiper => {
    const nextItem = swiper.el.parentElement.querySelector(".componentSwiperNext")

    nextItem.addEventListener('click', () => {
        swiper.slideNext()
    })
})

console.log(componentSwiper[0].el.querySelector(".componentSwiperNext"))