head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$(".js-show-nav").on("click",function(){
		$("html").toggleClass("has-open-nav");
		return false;
	});
	$('body').swipe({
		swipeLeft: function(event, direction, distance, duration, fingerCount) {
		  $("html").removeClass("has-open-nav")
		},
		swipeRight: function(event, direction, distance, duration, fingerCount) {
		    $("html").addClass("has-open-nav")
		}
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		//threshold: 0
	});
});