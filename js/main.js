  $(document).ready(function(){

    //--------Display header on scroll---------
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

    //--------Auto scroll HMDA homepage---------
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

    $(".browser_container img").each(function(){
      $(this).stop(true, false);
      $(this).css( "top", 0 );
      setTimeout(function (){ 
        animateImages();
      }, 2000);
    });

    //--------Fluid-width video player---------
    $("#vimeo-iframe").fitVids();

    //--------Responsive image carousel--------
    $("#image-slider").owlCarousel({
    	items: 1, 
      itemsDesktop: false,
      itemsDesktopSmall: false,
      itemsTablet: false,
      itemsMobile: false,
      autoHeight: true,
      slideSpeed : 300,
      paginationSpeed : 400,
      // autoPlay: 5000
		navigation: false,
		// navigationText: [
		// "<i class='fa fa-angle-left'></i>",
		// "<i class='fa fa-angle-right'></i>"
		// ]
    });
    $(".fa-angle-right").click(function(){
  		$("#image-slider").trigger('owl.next');
  	});
  	$(".fa-angle-left").click(function(){
  		$("#image-slider").trigger('owl.prev');
  	});











  });