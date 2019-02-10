$(document).ready(function(){

    var owl1 = $('.products-carousel');

    owl1.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    $('.food .owl-navs .prev').click(function(){
        owl1.trigger('prev.owl.carousel');
    });

    $('.food .owl-navs .next').click(function(){
        owl1.trigger('next.owl.carousel');
    });


    var owl2 = $('.testimonials-carousel');

    owl2.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('.testimonials .owl-navs .prev').click(function(){
        owl2.trigger('prev.owl.carousel');
    });

    $('.testimonials .owl-navs .next').click(function(){
        owl2.trigger('next.owl.carousel');
    });

    var owl3 = $('.team-carousel');

    owl3.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            568:{
                items:2
            },
            768:{
                items:3
            }
        }
    });

    $('.team .owl-navs .prev').click(function(){
        owl3.trigger('prev.owl.carousel');
    });

    $('.team .owl-navs .next').click(function(){
        owl3.trigger('next.owl.carousel');
    });

    $('.media-bars').click(function(){
        $('.media-menu').fadeIn(700);
        $('.media-menu').css({'display':'flex'});
    });
    
    $('.media-menu .btn').click(function(){
        $('.media-menu').fadeOut(700);
    });
});

$(window).scroll(function(){
    if($(this).scrollTop() > 70){
        $('.header').css({'position':'fixed','paddingTop':'5px','paddingBottom':'5px','backgroundColor':'rgba(0,0,0, 0.8)','transitionDuration':'0.7s'});
    }
    else{
        $('.header').css({'position':'absolute','paddingTop':'20px','paddingBottom':'20px','backgroundColor':'transparent','transitionDuration':'0.7s'})   
    }
});