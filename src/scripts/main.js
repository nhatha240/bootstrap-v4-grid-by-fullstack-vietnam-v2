	//main
$(document).ready(function () {
	// Phần Slider
	$('.slider-banner .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		responsive: {
			//breakpoint from 480 up
			992: {
				dots: false,
				nav: true,
				navElement: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'] 
			},
		}
		
	});
	$('.backopa .title').hover( function(){
		$(this).find('b').css(
			'color', '#00c4c9'
		)
	});
	$('.backopa .title').mouseleave(function(){
		$(this).find('b').css(
			'color', '#000'
		)
	});
	//cai menu select
	$('.dinhuong ul li').hover( function(){
		$(this).addClass('active')
	});
	$('.dinhuong ul li').mouseleave(function(){
		$(this).removeClass('active')
	});
	$('.dinhuong .item').addClass('active');
	$('.dinhuong .menu-sel ul li').on('click', function () {
		$(this).parents('ul').find('li').removeClass('click')
		$(this).toggleClass('click')

		var lm = $(this).attr('data-open')
			
		console.log(lm == 'tab')
		
		$(this).parents('.dinhuong').find(' .item').removeClass('active')
		if (lm == 'tab') {
			$(this).parents('.dinhuong').find(' .item').addClass('active')
		} else {

			$(this).parents('.dinhuong').find(' .item#' + lm).addClass('active')
		}

	})
	//slide ke cuoi ci dots
	$('.khachangnoi .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		
	});
	//cai slide cuoi
	$('.home-clients .owl-carousel').owlCarousel({
		nav: false,
		dots: true,
		items:3,
		responsive: {
			//breakpoint from 480 up
			768:{
				item: 3,
			},
			992: {
				dots: false,
				nav: true,
				items: 6,
				navElement: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'] 
			},
			
		},
		
	});
	
});
