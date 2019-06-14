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

    $('#products-carousel').owlCarousel({
        // items: 4,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            nav: false,
            dots: true,
            items: 1
          },
          480: {
            nav: false,
            dots: true,
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 3
          }
        }
    });
    $( ".owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fas fa-chevron-right"></i>');

    $('#tips-carousel').owlCarousel({
        // items: 4,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            nav: false,
            dots: true,
            items: 1
          },
          480: {
            nav: false,
            dots: true,
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 3
          }
        }
    });

    $('#conferences-carousel').owlCarousel({
        // items: 4,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            nav: false,
            dots: true,
            items: 1
          },
          480: {
            nav: false,
            dots: true,
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 3
          }
        }
    });

    //Open Mobil Menu
    $('.open-menu').click(function(e){
      e.preventDefault();

      $('.mobil').slideToggle('fast');
    });
});
