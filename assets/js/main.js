$(document).ready(function () {

    
    /*-------------------------------------------------------------------------------
    	  Sticky-Header(Making the navbar appear with white background when the page gets scrolled down)
    	-------------------------------------------------------------------------------*/
    $(window).scroll(function () {
        var sticky = $('#header'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });


          /*-------------------------------------------------------------------------------
    	  Mobile Navigation
    	-------------------------------------------------------------------------------*/

    $('#nav-toggle-label, .mobile-trigger').on('click', function () {
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.mobile-menu .sub-menu').slideUp(250);
        return false;
    });
    
    

       /*------------------------------------------------------------------
                         Active Class 
      -------------------------------------------------------------------*/

    $('.nav navbar-nav li a').click(function () {
        $('.nav navbar-nav li a').removeClass("active");
        $(this).addClass("active");
    });


        /*------------------------------------------------------------------
                         Active Class Mobile
      -------------------------------------------------------------------*/

        $('.wd-menu pop-scroll li a').click(function () {
        $('.wd-menu pop-scroll li a').removeClass("active_mobile");
        $(this).addClass("active_mobile");
    });  
    
    /*------------------------------------------------------------------
                      back to top
      -------------------------------------------------------------------*/

        $('#back-top a').on('click', function (e) {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
         

   }); 
