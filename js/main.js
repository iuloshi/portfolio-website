  $(document).ready(function(){

    //--------Display header on scroll---------
    function showHeader() {
      if ($(window).scrollTop() > 500) {
        $("header").show();
        // alert("hi");
      } 
      else {
        $("header").hide();
      }
    }
    $(window).scroll(showHeader); // check on scroll
    showHeader();// check on load


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