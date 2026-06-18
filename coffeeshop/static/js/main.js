// var swiper = new Swiper(".mySwiper", {
//       speed: 1000,
//       loopAdditionalSlides: 1,
//       pagination: {
//         el: ".swiper-pagination",
//         dynamicBullets: true,
//       },
//       autoplay: {
//         delay: 3000,
        
//       }
      
//     });


    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    speed: 1000,

    freeMode: true,
    freeModeMomentum: false,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    loop: true,
});