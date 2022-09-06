var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        // $('.products_item .img').height( $('.products_item .img').width() / 1.15);


        $('.our_advantages_item').matchHeight({
            byRow: false
        });

        $('.gallery_slider').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        if($(window).width() < 768){
            
            $('.our_team_slider').slick({
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });

        }

        jcf.replaceAll();

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  

  
    });
  
})(jQuery)