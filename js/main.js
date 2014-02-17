  $(document).ready(function(){
    // Fluid-width video player
    $("#vimeo-iframe").fitVids();

    //Responsive image carousel
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
		navigation: true,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]



    });











  });