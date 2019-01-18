// Layout stuff
$(document).ready(function() {
  var swiperSide = new Swiper('.product-photos-side .swiper-container', {
    direction: 'horizontal',
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  })
  var swiperProduct = new Swiper('.product-photo-main .swiper-container', {
    direction: 'horizontal',
    pagination: '.swiper-pagination',
    paginationClickable: true,
  })

  swiperSide.params.control = swiperProduct;
  swiperProduct.params.control = swiperSide;
});

// REAL stuff
tf = window.tf;
const model = tf.loadModel('https://raw.githubusercontent.com/adrianodennanni/furniture_classifier/master/demo/model/model.json');
