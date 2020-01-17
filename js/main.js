/*
    Template Name: Panshi - Catering Service HTML Template
    Template URI: https://devitems.com/html/coffee-preview/
    Description: This is html5 template
    Author: HasTech
    Author URI: https://devitems.com/
    Version: 1.0
*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. Owl Carousel
	03. jQuery MeanMenu
	04. ScrollUp
	05. Wow js
	06. Magnific Popup
    07. One Page Nav
 
======================================
[ End table content ]
======================================*/

(function ($) {
	"use strict";
    
/*------------------------------------
    01. Sticky Menu
-------------------------------------- */  
    var windows = $(window);
    var stick = $(".header-sticky");
	windows.on('scroll',function() {    
		var scroll = windows.scrollTop();
		if (scroll < 245) {
			stick.removeClass("sticky");
		}else{
			stick.addClass("sticky");
		}
	}); 
    
/*----------------------------------------
    02. Owl Carousel
---------------------------------------- */
/*----------------------------------------
    Slider Carousel
---------------------------------------- */
    $(".slider-wrapper").owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2500,
        items:1,
        nav:true,
        navText: ["<i class='zmdi zmdi-chevron-left'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
/*-------------------------------------
    Event Carousel
-------------------------------------- */
    $(".event-owl").owlCarousel({
        loop:true,
        items:1,
        dots: true,
		nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            }, 
            992:{
                items:3
            }, 
            1200:{
                items:3
            }
		}
    }); 
    
/*-------------------------------------
    Menu Carousel
-------------------------------------- */
    $(".menu-owl").owlCarousel({
        loop:true,
        items:1,
        dots: true,
		nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            }, 
            992:{
                items:3
            }, 
            1200:{
                items:3
            }
		}
    });    
    
/*-------------------------------------
    Testimonial Carousel
-------------------------------------- */
    $(".testimonial-owl").owlCarousel({
        loop:true,
        items:1,
        dots: true,
		nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:1
            }, 
            992:{
                items:1
            }, 
            1200:{
                items:1
            }
		}
    });

/*-------------------------------------------
    03. jQuery MeanMenu
--------------------------------------------- */
	$('.main-menu nav').meanmenu({
		meanScreenWidth: "767",
		meanMenuContainer: '.mobile-menu'
	});

/*------------------------------------------
    04. ScrollUp
------------------------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  
    
/*-------------------------------------------
    05. Wow js
--------------------------------------------- */    
    new WOW().init();
            
/*--------------------------
    06. Magnific Popup
---------------------------- */	
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    
     $('.image-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
        
/*--------------------------------
	07. One Page Nav
-----------------------------------*/
    var top_offset = $('.main-menu').height() - -17;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset
    });
	
})(jQuery);  