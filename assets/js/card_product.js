var $win = $(window);
var $doc = $(document);

;(function($) {

    $doc.ready(function(){

        $('.slider_for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider_nav'
        });

        $('.slider_nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            focusOnSelect: true,
            asNavFor: '.slider_for',
        });

        $('.tabs_nav li').on('click', function(){
            var data_tabs = $(this).data('tab');
            $('.tabs_nav li').removeClass('active');
            $(this).addClass('active');
            $('.tabs_item').removeClass('active');
            $('.' + data_tabs).addClass('active');
        });

    });

    $win.scroll(function() {
  
        
  
    });

    $win.resize(function() {
  
        
  
    });
  
})(jQuery)