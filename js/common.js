head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$(".js-show-nav").on("click",function(){
		$("body").toggleClass("has-open-nav");
		return false;
	});
	$('.l-out').swipe({
		swipeLeft: function(event, direction, distance, duration, fingerCount) {
		  $("body").removeClass("has-open-nav")
		},
		swipeRight: function(event, direction, distance, duration, fingerCount) {
		    $("body").addClass("has-open-nav")
		}
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		//threshold: 0
	});
});