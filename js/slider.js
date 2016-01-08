
var slider = (function() {

	var nextControl = $('.next').on('click', function(){

		var slides = $('.slide');
		
		var currentSlide = slides.filter('.current');

		currentSlide.removeClass('current');
		
		if (currentSlide.is(':last-child')) {
			$('.slide:first-child').addClass('current');
		}

		else {
			currentSlide.next().addClass('current');
		}

	});

	var prevControl = $('.prev').on('click', function(){

		var slides = $('.slide');
		
		var currentSlide = slides.filter('.current');

		currentSlide.removeClass('current');
		
		if (currentSlide.is(':first-child')) {
			$('.slide:last-child').addClass('current');
		}

		else {
			currentSlide.prev().addClass('current');
		}

	});

	var init = function() {
		prevControl();
		nextControl();
	};

	return {
		init:init
	}

})();

$(document).ready(function() {

});