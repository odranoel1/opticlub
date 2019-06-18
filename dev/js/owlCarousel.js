$( document ).ready(function(){

  $('#products-carousel').owlCarousel({
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
    nav: true,
    dots: false,
    loop: true,
    responsive: {
      0: {
        nav: false,
        dots: true,
        items: 1
      },
      580: {
        items: 2,
        nav: false,
        dots: true,
      },
      992: {
        items: 3
      }
    }
  });

  $('#conferences-carousel').owlCarousel({
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

  $('#select-variation').owlCarousel({
    items: 2,
    nav: true,
    dots: false,
    loop: false,
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
        items: 2
      },
      992: {
        items: 2
      }
    }
  });
  $( ".owl-prev").html('<i class="fas fa-chevron-left"></i>');
  $( ".owl-next").html('<i class="fas fa-chevron-right"></i>');

});
