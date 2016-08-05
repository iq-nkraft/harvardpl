(function ($) {
  

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };







  // functions to fire on window resize, like Expertise box
  $(window).resize(function () {
    if ($('body.front').length) {
      var elementHeights = $('.media-grid .views-row').map(function () {
        return $(this).height();
      }).get();

      // Math.max takes a variable number of arguments
      // `apply` is equivalent to passing each height as an argument
      var maxHeight = Math.max.apply(null, elementHeights);

      // Set each height to the max height
      $('.media-grid .views-row').height(maxHeight);
    }


    if ($('.iq-expertise').length) {

      var bodyWidth = Math.max($(window).width(), window.innerWidth);
      var bodyLowerLimit = 768;

      if (bodyWidth < bodyLowerLimit) {
        //$('.iq-expertise .expertise-description').removeClass('active');


        if (!$('.iq-expertise > .container > .view-content').hasClass('slick-initialized')) {
          $('.iq-expertise > .container > .view-content').slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            arrows: true
          });
        }

        /* NEW, for mobile center mode; allows clicking of items to left and right of center */
        $('.iq-expertise .slick-slider').on('click', '.slick-slide', function (e) {
          e.stopPropagation();
          var index = $(this).data("slick-index");
          if ($('.iq-expertise .slick-slider').slick('slickCurrentSlide') !== index) {
            $('.iq-expertise .slick-slider').slick('slickGoTo', index);
          }
        });            

        var slickCenterClass = '.' + $('.iq-expertise > .container > .view-content .views-row.slick-center').attr('class').split(' ')[1];
        console.log(slickCenterClass);
        $('.iq-expertise .attachment ' + slickCenterClass + ' .expertise-description').addClass('active');
        // On before slide change
        $('.iq-expertise > .container > .view-content').on('afterChange', function (event, slick, currentSlide) {
          console.log(currentSlide);
          var slickCenterClassNew = '.' + $('.iq-expertise > .container > .view-content .views-row.slick-center').attr('class').split(' ')[1];
          $('.iq-expertise .attachment ' + slickCenterClassNew + ' .expertise-description').addClass('active');
          $('.iq-expertise .attachment .views-row .expertise-description.active').not('.iq-expertise .attachment ' + slickCenterClassNew + ' .expertise-description').removeClass('active');
        });


      } else {

        if ($('.iq-expertise > .container > .view-content').hasClass('slick-initialized')) {
          $('.iq-expertise > .container > .view-content').slick('unslick');
          $('.iq-expertise > .container .views-row').removeClass('slick-center');
        }

        $('.iq-expertise > .container > .view-content .views-row').click(function () {
          //var className = '.'+$(this).attr('class').split(' ').join('.');
          $(this).addClass('opaque');
          $('.views-row.opaque').not(this).removeClass('opaque');
          var singleClassName = '.' + $(this).attr('class').split(' ')[1];
          console.log(singleClassName);
          if (!$('.iq-expertise .attachment ' + singleClassName + ' .expertise-description').hasClass('active')) {
            $('.iq-expertise .attachment ' + singleClassName + ' .expertise-description').addClass('active');
            $('.iq-expertise .attachment .expertise-description.active').not('.iq-expertise .attachment ' + singleClassName + ' .expertise-description').removeClass('active');
          } else {

          }

        });

      }
    }
  });

  // window load reserved for situations where Dom
  // elements like images must be fully
  // loaded (in Chrome, for exmample)
  $(window).load(function () {
    /* Homepage Expertise */

    if ($('.iq-expertise').length) {
      var bodyWidth = Math.max($(window).width(), window.innerWidth);
      var bodyLowerLimit = 768;
      if (bodyWidth < bodyLowerLimit) {

        $('.iq-expertise > .container > .view-content').slick({
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          arrows: true
        });

        /* NEW, for mobile center mode; allows clicking of items to left and right of center */
        $('.iq-expertise .slick-slider').on('click', '.slick-slide', function (e) {
          e.stopPropagation();
          var index = $(this).data("slick-index");
          if ($('.iq-expertise .slick-slider').slick('slickCurrentSlide') !== index) {
            $('.iq-expertise .slick-slider').slick('slickGoTo', index);
          }
        });            

        var slickCenterClass = '.' + $('.iq-expertise > .container > .view-content .views-row.slick-center').attr('class').split(' ')[1];
        console.log(slickCenterClass);
        $('.iq-expertise .attachment ' + slickCenterClass + ' .expertise-description').addClass('active');
        // On before slide change
        $('.iq-expertise > .container > .view-content').on('afterChange', function (event, slick, currentSlide) {
          console.log(currentSlide);
          var slickCenterClassNew = '.' + $('.iq-expertise > .container > .view-content .views-row.slick-center').attr('class').split(' ')[1];
          $('.iq-expertise .attachment ' + slickCenterClassNew + ' .expertise-description').addClass('active');
          $('.iq-expertise .attachment .views-row .expertise-description.active').not('.iq-expertise .attachment ' + slickCenterClassNew + ' .expertise-description').removeClass('active');
        });

      } else {


        $('.iq-expertise > .container > .view-content .views-row-1').addClass('opaque');
        $('.iq-expertise .attachment .views-row-1 .expertise-description').addClass('active');

        $('.iq-expertise > .container > .view-content .views-row').click(function () {
          //var className = '.'+$(this).attr('class').split(' ').join('.');
          var singleClassName = '.' + $(this).attr('class').split(' ')[1];
          $(this).addClass('opaque');
          $('.views-row.opaque').not(this).removeClass('opaque');
          console.log(singleClassName);
          if (!$('.iq-expertise .attachment ' + singleClassName + ' .expertise-description').hasClass('active')) {
            $('.iq-expertise .attachment ' + singleClassName + ' .expertise-description').addClass('active');
            $('.iq-expertise .attachment .expertise-description.active').not('.iq-expertise .attachment ' + singleClassName + ' .expertise-description').removeClass('active');
          } else {

          }

        });

      }
    }





  });



  Drupal.behaviors.iqboot = {
    attach: function (context, settings) {
      
      //HPL landing page boxes made clickable
      $(".landing-page-box").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });

      //

      $(".lazy img").lazyload({
        effect : "fadeIn"
      });
      // Handles Section Headings -- dotted line with blank space behind text
      if ($('.call-out h2', context).length) {
        $('.call-out h2').wrapInner('<span></span>');
      }

      if ($('.section-heading > span', context).length === 0) {
        $('.section-heading').wrapInner('<span></span>');
      }

      // new scripts for IQSkeleton theme
      $('.call-out.with-image', context).each(function () {
        var calloutImage = $(this).children('.background');
        var imgSrc = $(calloutImage).attr('src');
        $(calloutImage).hide();
        $(this).css('background-image', 'url(' + imgSrc + ')');
      });

      $('.hero', context).each(function () {
        var calloutContainer = $(this).children('.background');
        var calloutImage = $(calloutContainer).children('img');
        var imgSrc = $(calloutImage).attr('src');
        $(calloutContainer).hide();
        $(this).css('background-image', 'url(' + imgSrc + ')');
      });

      $('.view-mode-rotator', context).each(function () {
        var calloutContainer = $(this).children('.background');
        var calloutImage = $(calloutContainer).children('img');
        var imgSrc = $(calloutImage).attr('src');
        $(calloutContainer).hide();
        $(this).css('background-image', 'url(' + imgSrc + ')');
      });


      $('.featured', context).each(function () {
        var calloutContainer = $(this).children('.background');
        var calloutImage = $(calloutContainer).children('img');
        var imgSrc = $(calloutImage).attr('src');
        $(calloutContainer).hide();
        $(this).css('background-image', 'url(' + imgSrc + ')');
      });


      $('.jump-anchor', context).click(function (c) {
        c.preventDefault();
        var newhash = $(this).attr("href");
        var windowhash = newhash.substring(1);
        $("html, body").animate({scrollTop: ($(newhash).offset().top) - 80}, 500, 'swing');
        window.location.hash = windowhash;
      });

      // open mobile search, nk
      $('.search-trigger', context).click(function () {
        $(this).toggleClass('active');
        $(this).children('.lnr').toggleClass('lnr-magnifier lnr-cross')
        $('.search-block-block').toggleClass('search-open');
      });

      // open sub-menu
      $('.left-nav h2', context).click(function () {
        $(this).toggleClass('active');
        $('.left-nav ul.menu').toggleClass('menu-open');
      });

      // Mobile Menu Open, nk
      $('#open-mobile-menu', context).click(function () {
        //$( "#block-system-main-menu" ).toggle( function() {
        // Animation complete.
        //});
        $(this).toggleClass('menu-closed menu-opened');
        $(this).children('.lnr').toggleClass('lnr-menu-circle lnr-cross-circle');
        $('#block-system-main-menu', context).toggleClass('opened');
      });

      // open more info on research database page, nk
      $('.content-panel .more-info-button', context).click(function () {
        var moreInfoContainer = $(this).next('.more-info-container');
        $(this).next('.more-info-container').addClass('open');       
        setTimeout(function () {
              $(moreInfoContainer).addClass('visible');
        }, 20);  
        $('body').toggleClass('overlay-on');
        setTimeout(function () {
              $('body').addClass('overlay-visible');
        }, 20);          
      });
      // close more info on research database page, nk
      $('.more-info-container .close-button', context).click(function () {
        $(this).parent('.more-info-container').removeClass('open visible');
        $('body').removeClass('overlay-on overlay-visible');
      });
      // overlay click, close stuff, nk
      $('.overlay', context).click(function () {
        $('body').removeClass('overlay-on overlay-visible');
        $('.more-info-container').removeClass('open visible');
      });

      // homebrew content tabs, nk
      $('.content-tabs a', context).click(function (c) {
        c.preventDefault();
        var panelID = $(this).attr('href');
        $(this).addClass('active');    
        $('.content-tabs a').not(this).removeClass('active');
        $(panelID).addClass('content-panel-show');
        setTimeout(function () {
              $(panelID).addClass('visible');
        }, 20);         
        $('.content-panel').not(panelID).removeClass('content-panel-show visible');
      });

      // homebrew accordion, nk
      $('.accordion-row-header', context).click(function (c) {
        c.preventDefault();
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).next('.accordion-row-content').removeClass('open').slideToggle();
        } else {
          var accordionContent = $(this).next('.accordion-row-content');
          $(this).addClass('active');    
          $('.accordion-row-header').not(this).removeClass('active');
          $(accordionContent).addClass('open').slideToggle();
          // setTimeout(function () {
          //       $(panelID).addClass('visible');
          // }, 20);         
          if ($('.accordion-row-content').not(accordionContent).hasClass('open')) {
            $('.accordion-row-content.open').not(accordionContent).removeClass('open').slideToggle();
          }

        }

      });      

      //scroll to comments on click
      $('.search-forms .etabs .tab a', context).click(function (c) {
        c.preventDefault();
        var tabid = '#' + $(this).attr('class');
        $(tabid).addClass('show').removeClass('hide');
        $('.panel-container > div').not(tabid).addClass('hide').removeClass('show');
      });



      if ($('body.front', context).length) {
        //Make homepage boxes clickable
        $(".homepage-highlights .views-row .view-mode-highlight", context).click(function () {
          window.location = $(this).find("h4 > a").attr("href");
          return false;
        });
      }

      $('.expand-content-button', context).click(function (f) {
        f.preventDefault();
        $(this).toggleClass('opened-button');
        $(this).closest('.expandable-block').find('.expandable-content-container').toggleClass('opened'); //Adds 'a', removes 'b' and vice versa
      });


      function breakpoint() {
        var screenSize = $(document).width();

        if (screenSize <= 600) {
          return 'mobile';
        }
        else if (screenSize >= 600 && screenSize <= 1000) {
          return 'tablet';
        }
        else if (screenSize > 1000) {
          return 'desktop';
        }
        else {
          return 'desktop';
        }
      }

      // function respImgLoad(slick){
      function respImgLoad() {

        //how big is my screen
        var screenSize = breakpoint();

        //iterate through slick object and grab breakpoint data
        $('.front .rotator .views-row', context).each(function (index, slide) {
          var rotatorDesktop = $(slide).find("img").data("desktop");
          var rotatorMobile = $(slide).find("img").data("mobile");
          var rotatorTablet = $(slide).find("img").data("tablet");
          var rotatorsrc = $(slide).find("img").attr("src");


          switch (screenSize) {
            case('mobile'):
              rotatorsrc = rotatorMobile;
              break;

            case('tablet'):
              rotatorsrc = rotatorTablet;
              break;
            case('desktop'):
              rotatorsrc = rotatorDesktop;
              break;
          }

          //set src
          $(slide).find("img").attr("src", rotatorsrc);
        });
      }

      //All of the JS that fires only on the home page

      if ($('body.front', context).length) {

        //load images in rotator based on breakpoint
        $(window).bind('resize', function (e) {
          window.resizeEvt;
          $(window).resize(function () {
            clearTimeout(window.resizeEvt);
            window.resizeEvt = setTimeout(function () {
              breakpoint();
              respImgLoad();

            }, 250);
          });

        });


        //initialize slick homepage rotator, new
        $('.front .iq-rotator-block .view-content', context).slick({
          //setting-name: setting-value
          dots: true,
          easing: 'swing'
        });

        //initialize slick slider
        $('.front .slick-rotator .view-content', context).slick({
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          onInit: respImgLoad
        });
      }
    }
  }
})(jQuery);
