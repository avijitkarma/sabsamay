$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.back-to-top').css('display', 'block');
                
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click

        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        // $('#back-to-top').tooltip('show');

});

 $(document).ready(function(){
      $('.reviews').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          dots: true,
          pauseOnHover: false,
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 2
              }
          }, {
              breakpoint: 520,
              settings: {
                  slidesToShow: 1
              }
          }]
      });
  });

  var menuPos = $('.primary-menu').offset();
  // var sticky = menuPos.top;
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 39) {
        $('.site-logo').addClass('site-logo-sm');
        $('.primary-menu').css('background-color', '#f6f4ee');
        $('.nav-link').css('color', '#000');
        $('.donate-btn').css('color', '#ffb422');

    } else {
        $('.site-logo').removeClass('site-logo-sm');
        $('.primary-menu').css('background-color', '#fff');
        $('.nav-link').css('color', '#000');
        $('.donate-btn').css('color', '#000');
    }
});

  // $('.counter-count').each(function () {
  //       $(this).prop('Counter',0).animate({
  //           Counter: $(this).text()
  //       }, {
          

  //           duration: 4000,
  //           easing: 'swing',
  //           step: function (now) {
  //               $(this).text(Math.ceil(now));
  //           }
  //       });
  //   });

   $(document).ready(function(){
      $('.home-product-row').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: true,
          dots: false,
          pauseOnHover: true,
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 2
              }
          }, {
              breakpoint: 520,
              settings: {
                  slidesToShow: 1
              }
          }]
      });
  });


      $('.wwa-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
      });

   $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });


    
