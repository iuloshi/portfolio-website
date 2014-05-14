$(document).ready(function(){

//------------------Call fullPage.js------------------

  $.fn.fullpage({
    afterSlideLoad: function(anchorLink, index){
      if( index==2 ) {
        animateImage();
      }
    },
    onSlideLeave: function(anchorLink, index){
      $(".browser_container img").stop(true, false);
      resetImage();
    }
  });

//--------Browser animation for HMDA homepage---------
  function animateImage() {
    $(".browser_container img").each(function(){
      var frameHeight = $(".browser_container").height();
      var newTop = ($(this).height() - frameHeight) * -1;
      
      if( parseInt($(this).css( "top" ), 10) >= -1) {
        $(this).animate({
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
    $(".browser_container img").delay( 4000 ).css( "top", 0 );
  }
  
//--------FitVids fluid-width video player---------
  $("#vimeo-iframe").fitVids();

});