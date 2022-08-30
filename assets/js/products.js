var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        $('.products_item .img').height( $('.products_item .img').width() / 1.15);

        if($(window).width() >= 768){
            $('.products_item .img').height( $('.products_item .img').width() / 1.22);
        }

        if($(window).width() >= 1320){
            $('.products_item .img').height( $('.products_item .img').width() / 1.21);
        }

        if($(window).width() >= 1680){
            $('.products_item .img').height( $('.products_item .img').width() / 1.27);
        }

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        $('.products_item .img').height( $('.products_item .img').width() / 1.15);

        if($(window).width() >= 768){
            $('.products_item .img').height( $('.products_item .img').width() / 1.22);
        }

        if($(window).width() >= 1320){
            $('.products_item .img').height( $('.products_item .img').width() / 1.21);
        }

        if($(window).width() >= 1680){
            $('.products_item .img').height( $('.products_item .img').width() / 1.27);
        }
  
    });
  
})(jQuery)