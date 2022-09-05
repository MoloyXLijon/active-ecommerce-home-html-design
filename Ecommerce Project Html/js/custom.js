$(function(){
	/*=== Navbar ===*/
	$(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
	var subMenu = $('.navigation .navbar-nav .sub-menu');

	$('.aiz-carousel').slick({
    dots: true,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left text-dark"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right text-dark"></i></button>'
  });
  // product-carousel
  $('.product-carousel').slick({
    dots: false,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left text-dark"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right text-dark"></i></button>',
    slidesToShow: 5,
  });
  // sectio-featured
  $('.sectio-featured').slick({
    dots: false,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left text-dark"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right text-dark"></i></button>',
    slidesToShow: 5,
  });
  // best-selling
  $('.best-selling').slick({
    dots: false,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left text-dark"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right text-dark"></i></button>',
    slidesToShow: 5,
  });
  // classified-ads
  $('.classified-ads').slick({
    dots: false,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left text-dark"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right text-dark"></i></button>',
    slidesToShow: 5,
  });
  // best-sellers
  $('.best-sellers').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    rows:2,
    infinite: false,
  });


});
