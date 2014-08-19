head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
// WORKAROUND: converting 90vh to px
	$element = $('.js-top-section');
	function fixMobileSafariViewport() {
	  $element.css('height', window.innerHeight);
	}
	// listen to portrait/landscape changes
	window.addEventListener('orientationchange', fixMobileSafariViewport, true);
	fixMobileSafariViewport();
	$(".js-show-nav").on("click",function(){
		$("html").toggleClass("has-open-nav");
		return false;
	});
	$('body').swipe({
		swipeLeft: function(event, direction, distance, duration, fingerCount) {
		  $("html").removeClass("has-open-nav")
		}
		// swipeRight: function(event, direction, distance, duration, fingerCount) {
		//     $("html").addClass("has-open-nav")
		// }
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		//threshold: 0
	});
	$(".js-scroll-to").on("click",function(){
		var section = $(this).attr("data-section");
		var sectionTop = $("."+section).offset().top;
		$('html, body').animate({
            scrollTop: sectionTop
        }, 200); 
		return false;
	});
	$('.js-slick').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true
	});
	$('.js-slick-plan').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});

				
});