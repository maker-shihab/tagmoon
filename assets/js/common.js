$(document).ready(function(){
    // mobile menu 
    $('.all-p-humber').click(function(){
        $(this).toggleClass('open');
    });	

    // Start Humber Main Menu Icon Js
    $('.mobile-menu-icon').click(function(){
        $('nav.main_menu').slideToggle(300);
        $('nav.main_menu').addClass('mb_dropdown');
    });

  $('.supply_body').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1100:{
                items:4
            },
            1200:{
                items:5
            }
        }
    }) ;
    $('.brand_area').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1100:{
                items:4
            },
            1200:{
                items:6
            }
        }
    });  
    $('.token_supply').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1100:{
                items:4
            }
        }
    });
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