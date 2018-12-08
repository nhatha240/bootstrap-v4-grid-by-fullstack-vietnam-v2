'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
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
			}
		}

	});
	$('.backopa .title').hover(function () {
		$(this).find('b').css('color', '#00c4c9');
	});
	$('.backopa .title').mouseleave(function () {
		$(this).find('b').css('color', '#000');
	});
	//cai menu select
	$('.dinhuong ul li').hover(function () {
		$(this).addClass('active');
	});
	$('.dinhuong ul li').mouseleave(function () {
		$(this).removeClass('active');
	});
	$('.dinhuong .item').addClass('active');
	$('.dinhuong .menu-sel ul li').on('click', function () {
		$(this).parents('ul').find('li').removeClass('click');
		$(this).toggleClass('click');

		var lm = $(this).attr('data-open');

		console.log(lm == 'tab');

		$(this).parents('.dinhuong').find(' .item').removeClass('active');
		if (lm == 'tab') {
			$(this).parents('.dinhuong').find(' .item').addClass('active');
		} else {

			$(this).parents('.dinhuong').find(' .item#' + lm).addClass('active');
		}
	});
	//slide ke cuoi ci dots
	$('.khachangnoi .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true

	});
	//cai slide cuoi
	$('.home-clients .owl-carousel').owlCarousel({
		nav: false,
		dots: true,
		items: 3,
		responsive: {
			//breakpoint from 480 up
			768: {
				item: 3
			},
			992: {
				dots: false,
				nav: true,
				items: 6,
				navElement: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
			}

		}

	});
});
//# sourceMappingURL=main.js.map
