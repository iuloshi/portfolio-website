$(document).ready(function(){

//------------------Call fullPage.js------------------

  $.fn.fullpage({
    afterSlideLoad: function(anchorLink, index){
      if( anchorLink=='hmda' && index==2 ) {
        resetImage();
        animateImage();
      }
    },
    onSlideLeave: function(anchorLink, index){
      $(".browser_container img").stop(true, false);      
    }
  });

//--------Browser animation for HMDA homepage---------
  function animateImage() {
    $(".browser_container img").each(function(){
      var frameHeight = $(".browser_container").height();
      var newTop = ($(this).height() - frameHeight) * -1;
      
      if( parseInt($(this).css( "top" ), 10) >= -1) {
        $(this).delay( 500 ).animate({
          top: newTop
        }, 10000, "swing", function() {
          $(this).stop(true, false);
          $(this).css( "top", newTop );
          animateImage();
        });
      }
    });
  }

  function resetImage() {
    $(".browser_container img").css( "top", 0 );
  }

});  