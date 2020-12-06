
/**First Slider*/

$('.slider-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed: 3000,
    dots:true,
    prevArrow:".site-slider .slider-btn.prev",
    nextArrow:".site-slider .slider-btn.next",
});


/**Second Slider*/

$('.slider-two')
.not(".slick-initialized") 
.slick({ 
    
    prevArrow:".site-slider-two.prev",
    nextArrow:".site-slider-two.next", 
    slideToShow: 5,
    slideToScroll:1,
    autoplaySpeed:3000,
});