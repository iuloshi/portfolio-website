$(document).ready(function(){

//--------------Display header on scroll--------------
  function showHeader() {
    if ($(window).scrollTop() > 500) {
      $("header").slideDown(100);
    }
    else {
      $("header").hide();
    }
  }
  $(window).scroll(showHeader); // check on scroll
  showHeader();// check on load

//--------Browser animation for HMDA homepage---------
  function animateImages() {
    $(".browser_container img").each(function(){
      var frameHeight = $(".browser_container").height();
      var newTop = ($(this).height() - frameHeight) * -1;
      
      if( parseInt($(this).css( "top" ), 10) >= -1) {
        $(this).animate({
          top: newTop
        }, 10000, "swing", function() {
          $(this).stop(true, false);
          $(this).css( "top", newTop );
          animateImages();
        });
      }
      // if( parseInt($(this).css( "top" ), 10) <= newTop + 1) {
      //   $(this).animate({
      //     top: 0
      //   }, 7000, "swing", function() {
      //     $(this).stop(true, false);
      //     $(this).css( "top", 0 );
      //     animateImages();
      //   });
      // }
    });
  }
  animateImages();
  //set timer before beginning animation
  $(".browser_container img").each(function(){
    $(this).stop(true, false);
    $(this).css( "top", 0 );
    setTimeout(function (){ 
      animateImages();
    }, 2000);
  });

//--------FitVids fluid-width video player---------
  $("#vimeo-iframe").fitVids();

//--OWL Carousel/jQuery plugin for responsive image slider--
  $("#image-slider").owlCarousel({
  	items: 1, 
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
    autoHeight: true,
    slideSpeed : 300,
    paginationSpeed : 400,
	  navigation: false,
    // autoPlay: 5000
  });
  $(".fa-angle-right").click(function(){
		$("#image-slider").trigger('owl.next');
	});
	$(".fa-angle-left").click(function(){
		$("#image-slider").trigger('owl.prev');
	});
  //--------display arrows on hover--------
  $("#proj-4").hover(function(){
    $("#proj-4 i").fadeToggle(500);
  });






});