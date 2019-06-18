$( document ).ready(function() {

    $( '#home-sidebar' ).sliderPro({
        width: '100%',
        height: 300,
        arrows: true,
        buttons: false,
        waitForLayers: true,
        autoplay: true,
        autoplayDelay: 8000,
        autoScaleLayers: false,
        breakpoints: {
            360: {
                height: 500
            },
            640: {
                height: 300
            }
        }
    });

    //Open Mobil Menu
    $('.open-menu').click(function(e){
      e.preventDefault();

      $('.mobil').slideToggle('fast');
    });

    //Mobil Menu - Open options(tienda)
    $('.store').click(function(e){
      e.preventDefault();

      $('.store-option').slideToggle('fast');
    });

    window.onscroll = function (e)
    {
      if($(this).scrollTop() > 110) {

        if (!$(".cta-offer").hasClass('isCheckout')) {

          var heightCTA = $('.cta-offer').outerHeight();

          $(".cta-offer").addClass('fixed');
          $(".row.cta-offer").next().css( "margin-top", heightCTA + "px" );
        }

        $(".scroll-top").fadeIn();

        var heightHeader = $('.HeaderHome').outerHeight();

        $('.HeaderHome').removeClass('d-none').addClass('fixed');

      } else {

        if (!$(".cta-offer").hasClass('isCheckout')) {

          $(".cta-offer").removeClass('fixed');
          $(".row.cta-offer").next().css( "margin-top", "auto");
        }

        $(".scroll-top").fadeOut();

        $('.HeaderHome').addClass('d-none').remove('fixed');
      }
    }

    $(".scroll-button").click(function(e){
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $("body,html").offset().top
      }, 1500);
    });

    // Product ZOOM & Change beetwen thumbnail
    $(".img-detail-link").click( function(e) {
       e.preventDefault();
       var src = $(this).attr('data-src');

       $("#img-detail").attr('src',src);
       $(".img-zoom").attr('href',src);

       $("#img-detail").magnify();
    });

    $("#img-detail").magnify();


    // Product Choose Variant IMG
    $('.choose-variant').click(function(){

      var inputSRC = $(this).attr('data-src');

      $('.img-variant').attr('src', inputSRC);
    })
});
