var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        $('.range_slider').slick({
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        });

        $('.range_slider .img').height( $('.range_slider .img').width() / 1.15);

        if($(window).width() >= 768){
            $('.range_slider .img').height( $('.range_slider .img').width() / 1.22);
        }

        if($(window).width() >= 1320){
            $('.range_slider .img').height( $('.range_slider .img').width() / 1.21);
        }

        if($(window).width() >= 1680){
            $('.range_slider .img').height( $('.range_slider .img').width() / 1.27);
        }

        jcf.replaceAll();

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        $('.range_slider .img').height( $('.range_slider .img').width() / 1.15);

        if($(window).width() >= 768){
            $('.range_slider .img').height( $('.range_slider .img').width() / 1.22);
        }

        if($(window).width() >= 1320){
            $('.range_slider .img').height( $('.range_slider .img').width() / 1.21);
        }

        if($(window).width() >= 1680){
            $('.range_slider .img').height( $('.range_slider .img').width() / 1.27);
        }
  
    });
  
})(jQuery)