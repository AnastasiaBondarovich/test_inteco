$('.wrapper').ready(function () {
  $('.projects__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 2000,
    autoplay: true,
    pauseOnHover: true,
    fade: true,
    draggable: true,
    pauseOnHover: false,
    swipe: true,
    swipeToSlide: true,
    waitForAnimate: false,
    appendDots:'.projects__slider-item-dots',
    nextArrow: '.projects__slider-item-arrows',
  });

  $('.principles__slider').slick({
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    speed: 2000,
    autoplay: true,
    pauseOnHover: true,
    fade: true,
    draggable: true,
    pauseOnHover: false,
    swipe: true,
    swipeToSlide: true,
    waitForAnimate: false,
    appendDots:'.principles__slider-item',
    nextArrow: '.principles__slider-item-arrows',
  });

  $('.offers__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 2000,
    autoplay: true,
    pauseOnHover: true,
    fade: true,
    draggable: true,
    pauseOnHover: false,
    swipe: true,
    swipeToSlide: true,
    waitForAnimate: false,
    appendDots:'.offers__slider-item-dots',
    nextArrow: '.offers__slider-item-arrows',
  })
})


