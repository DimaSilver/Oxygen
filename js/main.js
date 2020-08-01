$(function(){
	$('.slider__items').slick({
		prevArrow: '<button type="button" class="slick-arrows slick-prev"><img class="prev" src="images/arrow-left.svg" alt=""/></button>',
		nextArrow: '<button type="button" class="slick-arrows slick-next"><img class="next" src="images/arrow-right.svg" alt=""/></button>',
		dots: true,
		dotsClass: 'slider__dots'
	});
});