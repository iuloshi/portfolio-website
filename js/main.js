$(document).ready(function(){

//------------------Call fullPage JS------------------

  $.fn.fullpage();

//--------------Display header on scroll--------------

  $(window).scroll(function(){
    $("header").slideDown(250);
  });

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
  //Fire animation when user scrolls beyond Intro section
  function initBrowserScroll() {
    if ($(window).scrollTop() > 500) {
      animateImages();
    }
  }
  $(window).scroll(initBrowserScroll); 
  initBrowserScroll();

  // ***NOT WORKING:*** Restart animation when resize window
  $(window).resize(function(){
    animateImages();
  });
  $(window).resize(animateImages); 
  
//--------FitVids fluid-width video player---------
  $("#vimeo-iframe").fitVids();


});