var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        jcf.replaceAll();

        $('.star').fontstar({},function(value,self){
            $('.value_star').text(value);
        });

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        
  
    });
  
})(jQuery)