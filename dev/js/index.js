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

    $('#product-carousel').owlCarousel({
      nav: true,
      dots: false,
    });

    $('#video-carousel').owlCarousel({
      nav: true,
      dots: false,
    });
});
