$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
    });
});

$(document).ready(function() {
    $('.slider_2').slick({
   
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      centerPadding: '17px',
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      dots:true
    });
  });