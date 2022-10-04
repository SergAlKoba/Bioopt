var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        // $('.products_item .img').height( $('.products_item .img').width() / 1.15);


        $('.ways-item p').matchHeight({
            byRow: false
        });

        $('.our_advantages_item').matchHeight({
            byRow: false
        });

        jcf.replaceAll();

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  

  
    });
  
})(jQuery)