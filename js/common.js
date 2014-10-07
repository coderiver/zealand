head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// $element = $('.js-top-section');
	// function fixMobileSafariViewport() {
	//   $element.css('height', $(window).height());
	// }
	// // listen to portrait/landscape changes
	// window.addEventListener('orientationchange', fixMobileSafariViewport, true);
	
	


	// var isMacLike = navigator.userAgent.match(/(iPhone|iPod|iPad)/i)?true:false;

	// if(isMacLike){
	// 	fixMobileSafariViewport();
	// }
	// else{ 
	
	// }

	var body = $("body");
	
	body.on('scroll touchmove mousewheel', function(e){
	   if ($('html').hasClass('has-open-nav')) {
	    e.preventDefault();
	    e.stopPropagation();
	    return false;
	   }
	});
	$(".js-show-nav").on("click",function(){

		var bodyScroll = body.scrollTop();
		console.log(bodyScroll);
		body.scrollTop(bodyScroll);
		$("html").toggleClass("has-open-nav");
		//$("html").toggleClass("has-open-nav");
		return false;
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
	$('.js-slick-main').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		onAfterChange: function() {
			var index = $('.js-slick-main').slickCurrentSlide();
			$(".js-bg").hide();
			$(".js-bg-"+index).show();
		}
	});
	$('.js-slick-plan').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});
	$('.touch body').swipe({
		swipeLeft: function(event, direction, distance, duration, fingerCount) {
			$("html").removeClass("has-open-nav");
		}
		// swipeRight: function(event, direction, distance, duration, fingerCount) {
		//     $("html").addClass("has-open-nav")
		// }
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		//threshold: 0
	});
	var sidebarAncor = $(".header .l-center");
	var sidebar = $(".js-sidebar");
	function sidebarPos() {
		var left = + sidebarAncor.offset().left + sidebarAncor.outerWidth() - sidebar.outerWidth();
		sidebar.css({
			left: left
		});
		
	}
	sidebarPos();
	$(window).resize(function(){
		sidebarPos();
	});
	$(window).scroll(function(){
		headerAnim();
	});


	function headerAnim() {
		var top = $(document).scrollTop();
		if (top <=150) {
			$("body").attr('class','animation-step'+top);
		}
		else {
			$("body").attr('class','animation-step150');
		}

	}
	headerAnim();
				
});