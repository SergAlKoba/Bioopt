var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        jcf.replaceAll();
    
        $('.link li').on('click', function(){
            var dataTabs = $(this).data('tab');
            $('.link li').removeClass('active');
            $(this).addClass('active');
            $('.maps_item').removeClass('active');
            $('.' + dataTabs).addClass('active');
        });

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        
  
    });
  
})(jQuery)