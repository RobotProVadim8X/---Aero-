(function($) {

    "use strict";


    /*-----------------------------------------------------------------------------------*/
    /* Adding Class in body
     /*-----------------------------------------------------------------------------------*/
    jQuery.each( jQuery.browser, function( i, val ) {
        $("body").addClass(i);
    });


    /*-----------------------------------------------------------------------------------*/
    /* Parallax
     /*-----------------------------------------------------------------------------------*/
    // var scroll = $('div[data-type="background"]');
    // cache the window object
    var $window = $(window);

    $('div[data-type="background"]').each(function(){
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = '50% '+ yPos + 'px';

            // move the background
            $scroll.css({ backgroundPosition: coords });
        }); // end window scroll
    });  // end section function



    /*-----------------------------------------------------------------------------------*/
    /* Loader
     /*-----------------------------------------------------------------------------------*/
    $(window).load(function(){
        $('#website-loader').delay(1500).fadeOut();
        $("table").addClass(" table table-bordered ");
    });


    /*-----------------------------------------------------------------------------------*/
    /* Header Top Info
     /*-----------------------------------------------------------------------------------*/
    var resHeader = $('.header-responsive i');

    $( '.header-responsive' ).on('click', function() {
        $( '.top-contact-info' ).slideToggle( 50, function() {
            if(resHeader.hasClass('glyphicon-chevron-down')){
                resHeader.removeClass('glyphicon-chevron-down');
                resHeader.addClass('glyphicon-chevron-up');
            }else{
                resHeader.removeClass('glyphicon-chevron-up');
                resHeader.addClass('glyphicon-chevron-down');
            }
        });
    });
    if($(window ).width() >= 752){
        $( '.top-contact-info').show();
    }
    if($(window ).width() <= 751){
        $( '.top-contact-info').hide();
    }



    /*-----------------------------------------------------------------------------------*/
    /* Logo Function
     /*-----------------------------------------------------------------------------------*/

    var smallLogo = $('.small-logo');
    var forSmallLogo = $('.for-small-logo');
    var bigLogo = $('.for-big-logo');

    if(smallLogo.outerWidth() > forSmallLogo.outerWidth()){
        forSmallLogo.hide();
        bigLogo.show();
    }
    else{
        forSmallLogo.show();
        bigLogo.hide();
    }

    window.onresize = function() {
        var smallLogo = $('.small-logo');
        var forSmallLogo = $('.for-small-logo');
        var bigLogo = $('.for-big-logo');

        if(smallLogo.outerWidth() > forSmallLogo.outerWidth()){
            forSmallLogo.hide();
            bigLogo.show();
        }
        else{
            forSmallLogo.show();
            bigLogo.hide();
        }
    };


    /*-----------------------------------------------------------------------------------*/
    /* Main Menu Function
     /*-----------------------------------------------------------------------------------*/
    $('.main-menu > ul > li').hover(function(){
        $(this).children('.sub-menu').stop(true,true).slideToggle('fast');
    });

    $(window).on("load", function(){
        $('#sticky-header').sticky({topSpacing:0});
    });


    /*-----------------------------------------------------------------------------------*/
    /* Isotope Function
     /*-----------------------------------------------------------------------------------*/
    if(jQuery().isotope) {
        // init Isotope
        $(window).load(function() {
            var $container = $('#container').isotope({
                // options
            });

            // filter items on button click
            $('#filters').on( 'click', 'a', function(e) {
                e.preventDefault();
                var filterValue = $(this).attr('data-filter');
                $container.isotope({ filter: filterValue });

            });

            // change active class on anchor
            $('.sort-filters').each( function( i, filterGroup ) {
                var $filterGroup = $( filterGroup );
                $filterGroup.on( 'click', 'a', function() {
                    $filterGroup.find('.active').removeClass('active');
                    $( this ).addClass('active');
                });
            });
        });
    }

    $(".recent-work.wrapper-container").animate({height: $(".recent-work .item > a > img").height()},0);
    $(window).on("load", function(){
        $(".recent-work .wrapper-container").animate({height: $(".recent-work .item > a > img").height()},0);
    });

    window.onresize = function() {
        $(".recent-work .wrapper-container").animate({height: $(".recent-work .item > a > img").height()},0);
    };


    /*-----------------------------------------------------------------------------------*/
    /* About Us Image
     /*-----------------------------------------------------------------------------------*/
    var aboutImageHeight = function(){
        if($(window).width() > 750){
            $('.about-right-wrap').show();
            $('.about-right-wrap').animate({
                height: $('.about-us').outerHeight()
            },0);
        }else{
            $('.about-right-wrap').hide();
        }
    };
    aboutImageHeight();
    window.onresize =  aboutImageHeight();


    /*-----------------------------------------------------------------------------------*/
    /* Owl Carousel Function
     /*-----------------------------------------------------------------------------------*/
    if(jQuery().owlCarousel) {

        //Main Slider
        var mainSlider = $(".main-slider .slides");

        mainSlider.owlCarousel({
            items: 1,
            loop: true,
            navigation : false,
            autoplay : true,
            smartSpeed:500,
            mouseDrag:false,
            touchDrag:false,
            onChange  : function callBack() {
                var leftArea =  $(".main-slider .left-area"),
                    rightArea =  $(".main-slider .right-area");
                rightArea.animate({marginTop: 300, opacity:0},0);
                leftArea.find("h1, p, a").animate({marginTop: -500},0);
                leftArea.animate({opacity:0},0);

            },
            onChanged  : function callBackTwo() {
                var leftArea =  $(".main-slider .left-area"),
                    rightArea =  $(".main-slider .right-area"),
                    rightAreaImg =  $(".main-slider .right-area .slider-image");
                leftArea.delay( 600 ).animate({opacity:1},0);
                rightArea.delay( 600 ).animate({opacity:1},0);

                rightArea.animate({
                    marginTop:(mainSlider.outerHeight()/2)-(rightAreaImg.outerHeight()/2)
                },1000);

                leftArea.find("h1").animate({marginTop: 0},1000);
                leftArea.find("p, a").animate({marginTop: 0},1500);
            }
        });



        var sliderResize = function(){
            var sliderLeftContent = $('.slider-content .left-area'),
                sliderRightContent = $('.slider-content .slider-image'),
                sliderRight = $('.main-slider .right-area');

            //Slider Left Side contents
            sliderLeftContent.animate({
                marginTop : (mainSlider.outerHeight()/2.2)-(sliderLeftContent.outerHeight()/2)
            },0);

            //Slider right side contents
            sliderRight.animate({
                marginTop:(mainSlider.outerHeight()/2)-(sliderRightContent.outerHeight()/2)
            },0);
            if(sliderRightContent.outerHeight()> mainSlider.outerHeight()){
                sliderRight.animate({
                    marginTop:"30px"
                },0);
            }else{
                sliderRight.animate({
                    marginTop:(mainSlider.outerHeight())-(sliderRightContent.outerHeight())
                },0);
            }
        };


        sliderResize();
        $(window).load(function(){

            sliderResize();

        });
        window.onresize = function() {

            sliderResize();

        };

        //Testimonial Carousel
        var testimonial= $("#testimonial-slider").owlCarousel({
            items: 1,
            navigation : false,
            slideSpeed : 300,
            autoPlay:true,
            loop: true
        });


        //partners carousel
        var partners = $(".customNavigation");
        $("#partners-carousel").owlCarousel({
            items:6,
            itemsScaleUp: false,
            loop: true,
            nav:true,
            navContainer:'.customNavigation',
            pagination: false,
            navText:'',
            // center:true,
            margin:20,
            responsive:{
                0:{
                    items:1
                },
                450:{
                    items:2
                },
                600:{
                    items:3
                },
                768:{
                    items:4
                },
                991:{
                    items:5
                },
                1200:{
                    items:6
                }
            }
        });
        $(window).on("load", function(){
            partners.children('.owl-prev').addClass('glyphicon glyphicon-chevron-left');
            partners.children('.owl-next').addClass('glyphicon glyphicon-chevron-right');
        });


        //Post Slider
        var postSlider = $(".post-slider");
        postSlider.owlCarousel({
            navigation : false,
            items:1,
            pagination : true,
            autoplay : true,
            smartSpeed:500,
            loop:true
        });


        //Project Slider
        $(".project-slides").owlCarousel({
            items:1,
            loop: true,
            pagination: true,
            smartSpeed:1000,
            autoplay:true
        });


        //Pricing Slider
        var pricingSlider = $(".pricing-slider-nav");
        $(".pricing-slider .owl-slides").owlCarousel({
            items:3,
            loop:true,
            nav:true,
            navText:'',
            smartSpeed:1000,
            navContainer: ".pricing-slider-nav",
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                991:{
                    items:3
                }
            }
        });
        $(window).on("load", function(){
            pricingSlider.children('.owl-prev').addClass('glyphicon glyphicon-chevron-left');
            pricingSlider.children('.owl-next').addClass('glyphicon glyphicon-chevron-right');
        });
    }


    /*-----------------------------------------------------------------------------------*/
    /* Mean Menu Function
     /*-----------------------------------------------------------------------------------*/
    if(jQuery().meanmenu){
        $('header .main-menu').meanmenu({
            meanMenuContainer: '#main-menu-wrap',
            meanMenuClose: "X",
            meanScreenWidth: "1200"
        });
    }


    /*-----------------------------------------------------------------------------------*/
    /* Is Element on screen Function
     /*-----------------------------------------------------------------------------------*/
    function isOnScreen(element){
        var win = $(window);
        var viewPort = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };

        viewPort.right = viewPort.left + win.width();
        viewPort.bottom = viewPort.top + win.height();

        var bounds = element.offset();
        bounds.right = bounds.left + element.outerWidth();
        bounds.bottom = bounds.top + element.outerHeight();
        return (!(viewPort.right < bounds.left || viewPort.left > bounds.right || viewPort.bottom < bounds.top || viewPort.top > bounds.bottom));
    }


    /*-----------------------------------------------------------------------------------*/
    /* Services Easy Pie Function
     /*-----------------------------------------------------------------------------------*/
    var easypie = function(){

        $('.easypiechart').each(function(){
            var $this = $(this),
                $data = $this.data(),
                $step = $this.find('.step'),
                $target_value = parseInt($($data.target).text()),
                $value = 0;
            $data.barColor || ( $data.barColor = function($percent) {
                $percent /= 100;
                return "rgb(" + Math.round(200 * $percent) + ", 200, " + Math.round(200 * (1 - $percent)) + ")";
            });
            $data.onStep =  function(value){
                $value = value;
                $step.text(parseInt(value));
                $data.target && $($data.target).text(parseInt(value) + $target_value);
            };
            $data.onStop =  function(){
                $target_value = parseInt($($data.target).text());
                $data.update && setTimeout(function() {
                    $this.data('easyPieChart').update(100 - $value);
                }, $data.update);
            };
            $(this).easyPieChart($data);
        });

    };

    var loader = $('.loader');
    $(window).scroll(function(){ // bind window scroll event
        if( loader.length > 0 ) { // if target element exists in DOM
            if( isOnScreen(loader) ){
                easypie();
            }
        }
    });


    /*-----------------------------------------------------------------------------------*/
    /* Scroll to top Function
     /*-----------------------------------------------------------------------------------*/
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() != "0") {
            $(this).fadeIn("slow")
        }
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() == "0") {
                $(scrollDiv).fadeOut("slow")
            } else {
                $(scrollDiv).fadeIn("slow")
            }
        });
        $(this).click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        })
    };


    if($(window).width() > 750) {
        jQuery(function ($) {
            $("#scroll-top").scrollToTop();
        });
    }

    $(window).on('resize', function(){
        if($(window).width() > 750) {
            jQuery(function ($) {
                $("#scroll-top").scrollToTop();
            });
        }
    });



    /*-----------------------------------------------------------------*/
    /* Form Validation
     /*-----------------------------------------------------------------*/

    if(jQuery().validate && jQuery().ajaxSubmit)
    {

        /* Contact Form Handler */
        var contact_loader = $('#contact-loader'),
            response_container = $('#response-container'),
            error_container = $("#error-container"),
            contact_form = $('#contact-form');


        contact_loader.fadeOut('fast');

        var contact_options = {
            target: response_container,
            beforeSubmit: function () {
                contact_loader.fadeIn('fast');
            },
            success: function () {
                contact_loader.fadeOut('fast');
                response_container.fadeIn('fast');
                contact_form.resetForm();
            }
        };

        contact_form.validate({
            errorLabelContainer: error_container,
            submitHandler: function (form) {
                $(form).ajaxSubmit(contact_options);
            }
        });



        /* Newsletter form handler */
        var newsletter_loader = $('#newsletter-loader'),
            message_container = $('#message-sent'),
            newsletter_form = $('#newsletter-form');

        var newsletter_options = {
            target: message_container,
            beforeSubmit: function () {
                newsletter_loader.fadeIn('fast');
                message_container.fadeOut('fast');
            },
            success: function () {
                newsletter_loader.hide();
                message_container.fadeIn('slow');
                newsletter_form.resetForm();
            }
        };

        newsletter_form.validate({
            submitHandler: function (form) {
                $(form).ajaxSubmit(newsletter_options);
            }
        });

    }


    /*-----------------------------------------------------------------------------------*/
    /* Counter Function
     /*-----------------------------------------------------------------------------------*/
    function customCounter(startValue, endValue, id){

        // Animate the element's value
        jQuery({value:startValue}).animate({value: endValue}, {
            duration: 1000,
            step: function() { // called on every step
                // Update the element's text with rounded-up value:

                $(id).text(Math.ceil(this.value));
            }
        });
    }

    var scrollOnce = true;
    var achievements = $('.our-achievements');

    $(window).scroll(function(){
        if( achievements.length > 0 ) {
            if ((scrollOnce) && (isOnScreen(achievements))) {
                customCounter(10300, 10500, "#clint-counter");
                customCounter(5000, 5400, "#project-counter");
                customCounter(8500, 8700, "#email-counter");
                customCounter(16500, 16700, "#project-counter-two");
                scrollOnce = false;
            }
        }
    });


    /*-----------------------------------------------------------------------------------*/
    /* Swipe Box
     /*-----------------------------------------------------------------------------------*/
    $( '.swipebox' ).swipebox( {
        useCSS : true, // false will force the use of jQuery for animations
        useSVG : true, // false to force the use of png for buttons
        initialIndexOnArray : 0, // which image index to init when a array is passed
        hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
        hideBarsDelay : 3000, // delay before hiding bars on desktop
        videoMaxWidth : 1140 // videos max width

    } );

    /*-----------------------------------------------------------------------------------*/
    /* Google Map
     /*-----------------------------------------------------------------------------------*/

    //var  element= document.getElementById('map-wrap');
    if($('#map-wrap').length > 0){

        (function(window, google){

            //map options
            var latlang = new google.maps.LatLng(55.749792,37.632495),
                options = {
                    center: latlang,
                    zoom:15,
                    scrollwheel:false
                },
                element= document.getElementById('map-wrap'),
                map = new google.maps.Map(element, options),
                marker = new google.maps.Marker({
                    position: latlang,
                    map: map,
                    title: "Ваша компания"
                });
        }(window, google));
    }
})(jQuery);