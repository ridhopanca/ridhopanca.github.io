$(document).ready(function(){
    menuItem();
});
function menuItem(){
	$('#menu li:has(ul)').children('ul').hide();
	$('#menu li:has(ul)').find('a').on('click', function() {

		var parent = $(this).parent(),
		submenu = $(this).next('ul');

		if (submenu.is(':visible')) {
			$(this).parent().find('ul').slideUp(300);
		}

		if (submenu.is(':hidden')) {
			parent.siblings().find('ul').slideUp(300);
			parent.find('ul:first').slideDown(300);
		}

		if (parent.find('ul').children().length == 0) {
			return true;
		} else {
			return false;
		}

	});

	$('#menu-burger').on('click', function() {
		if (!$('#poppin-nav').hasClass('open')) {
			toggle_nav(true);
		} else {
			toggle_nav(false);
		}
	});

	$('#nav-off, #menu-overlay').on('click', function() {
		toggle_nav(false);
	});

	

	$('.hamburger').on('click', function() {
		$(this).toggleClass('is-active');
		$(this).next().toggleClass('nav-show')
	});
	$('.menu-button a').on('click', function() {
		$('.overlay').fadeToggle(300);
		$(this).toggleClass('btn-open').toggleClass('btn-close');
	});
	$('.overlay').on('click', function() {
		$('.menu-button').fadeToggle(300);
		$('.button a').toggleClass('btn-open').toggleClass('btn-close');
		open = false;
	});

	$(".button a").on('click', function() {
		$(".overlay").fadeToggle(200);
		$(this).toggleClass("btn-open").toggleClass("btn-close");
	});

	$(".overlay").on("click", function() {
		$(".overlay").fadeToggle(200);
		$(".button a").toggleClass("btn-open").toggleClass("btn-close");
		open = false;
	});
}

var selector = '#tab li a';

$(selector).on('click', function(e){
	e.preventDefault();
    $(selector).removeClass('active');
    $(this).addClass('active');
});

function toggle_nav(lolly) {
	if (lolly === true) {
		$('#poppin-nav, #menu-overlay').addClass('nav-on');
	} else {
		$('#poppin-nav, #menu-overlay').removeClass('nav-on');

		setTimeout(function() {
			$('#menu li.has-submenu a').next('.submenu').slideUp(300);
		}, 500);
	}
}

function facebook() {
 	window.open("https://www.facebook.com/profile.php?id=100014657355503")
}

function instagram() {
 	window.open("https://www.instagram.com/ridhopancasakti")
}

function linkedin() {
  	window.open("https://www.linkedin.com/in/ridho-panca-sakti-351b83229")
}

function mnbsocks() {
	window.open("https://mnb-socks.herokuapp.com/")
}

function mygas() {
	window.open("https://www.mygas.id/")
}

function takayama() {
	window.open("https://www.takayama-official.co.id/")
}

function bek() {
	window.open("https://bintangekakarsa.com/")
}
function cv() {
	window.open("https://drive.google.com/file/d/13nBVl0G_YfL47Fpvhih0Ee10JkCOPahd/view?usp=sharing")
}

function services() {
	toggle_nav(false);
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#services").offset().top
    }, 2000);
}


function home() {
	toggle_nav(false);
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#content").offset().top
    }, 2000);
}

function contact() {
	toggle_nav(false);
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
}