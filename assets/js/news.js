var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        $('.news_item h3').matchHeight({
            byRow: false
        });

        $('.news_item p').matchHeight({
            byRow: false
        });

        jcf.replaceAll();

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        
  
    });
  
})(jQuery)