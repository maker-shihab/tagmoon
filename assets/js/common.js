$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})
    $('.s_a_t_1').click(function(){
        $(this).addClass('active');
        $('.s_a_t_2').removeClass('active');
        $('.s_a_t_3').removeClass('active');
        return false;
    }); 
    
    $('.s_a_t_2').click(function(){
        $(this).addClass('active');
        $('.s_a_t_1').removeClass('active');
        $('.s_a_t_3').removeClass('active');
        return false;
    }); 
    
    $('.s_a_t_3').click(function(){
        $(this).addClass('active');
        $('.s_a_t_1').removeClass('active');
        $('.s_a_t_2').removeClass('active');
        return false;
    });
});