var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        $('.open_mobile').on('click', function(){
            $('.nav_mobile').toggleClass('active');
        });

        $('.menu_desc').on('click', function(){
            $('.nav_mobile').addClass('active');
        });

        $('.close_menu').on('click', function(){
            $('.nav_mobile').removeClass('active');
        });

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        
  
    });
  
})(jQuery)