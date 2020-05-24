
          /*-------------------------------------------------------------------------------
    	  Mobile Navigation
    	-------------------------------------------------------------------------------*/

    $('li.has-child > a').after('<div class="child-trigger"><i></i></div>');

    $('#nav-toggle-label, .mobile-trigger').on('click', function () {
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.mobile-menu .sub-menu').slideUp(250);
        return false;
    });

    $('.mobile-trigger2').on('click', function () {
        $('body').toggleClass('mobile-open-2');
        $('.child-trigger').removeClass('child-open');
        $('.mobile-menu .sub-menu').slideUp(250);
        return false;
    });

    $('.child-trigger').on('click', function () {
        var $parent = $(this).parent().siblings('.has-child');
        $parent.find('.child-trigger').removeClass('child-open');
        $parent.find('.sub-menu').slideUp(250);

        $(this).next('.sub-menu').slideToggle(250);
        $(this).toggleClass('child-open');
        return false;
    });

    $('.mob-menu-overlay').on('click', function () {
        $('body').removeClass('mobile-open');
        $('body').removeClass('mobile-open-2');
        $('.child-trigger').removeClass('child-open');
        $('.mob-menu .sub-menu').slideUp(250);
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
