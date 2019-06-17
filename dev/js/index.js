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

    // ScrollTop Button
    $(window).scroll(function(){
      if ($(this).scrollTop()>30) {
        $(".scroll-top").fadeIn();
      } else {
        $(".scroll-top").fadeOut();
      }
    });

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

    // CallToAction fixed in scroll
    // $(window).scroll(function(){
    //
    //   if ($(this).scrollTop()>30) {
    //     $(".cta-offer").addClass('fixed');
    //   } else {
    //     $(".cta-offer").removeClass('fixed');
    //   }
    // });
});
