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

        $('.close_popup').on('click', function(){
            $('.popup').fadeOut();
        });

        $('.close').on('click', function(){
            $('.popup').fadeOut();
        });

        $('.with_us_js').on('click', function(){
            $('.with_us').fadeIn();
        });

        $('.retail_js').on('click', function(){
            $('.retail').fadeIn();
        });

        $('.wholesale_js').on('click', function(){
            $('.wholesale').fadeIn();
        });

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        
  
    });
  
})(jQuery)