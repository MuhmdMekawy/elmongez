$(document).ready(function () {
  $('.navbar .content .close-icon').click(function () {
    $(this).hide()
    $('.navbar .content ul.nav-links').css({
      'height': '0',
      'padding-top': '0'
    })
  });
  $('.navbar .content .left .mobile-navbar').click(function () {
    $('.navbar .content .close-icon').show(500)
    $('.navbar .content ul.nav-links').css({
      'height': '100%',
      'padding-top': '60px'
    })
  });
  $('.homepage-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    fluidSpeed: true,
    smartSpeed: 3000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('.supporters-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    fluidSpeed: true,
    smartSpeed: 3000,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 7
      }
    }
  });
  $('.accordion .accordion-text').slideUp(800)
  $('.accordion.active .accordion-text').slideDown(800)
  $('.accordion').click(function () {
    $(this).toggleClass('active');
    $(this).children('.accordion-text').slideToggle(800);
    $(this).siblings('.accordion').removeClass('active').children('.accordion-text').slideUp(800);
  });


})
