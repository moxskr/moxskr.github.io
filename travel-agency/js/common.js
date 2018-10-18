$(document).ready(function(){

    wow = new WOW(
        {
                 boxClass:     'wow',      // default
                 animateClass: 'animated', // default
                 offset:       0,          // default
                 mobile:       false,       // default
                 live:         true        // default
               });
    wow.init();

    $('.special-packages .owl-carousel').owlCarousel({
        loop:false,
        margin:15,
        nav:false,
        dots:true,
        navText: ["",""],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
        }
    })
    $('.related-offers .owl-carousel').owlCarousel({
        loop:false,
        margin:15,
        nav:false,
        dots:true,
        navText: ["",""],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
        }
    })
    $('.what-people-say .owl-carousel').owlCarousel({
        loop:true,
        margin:100,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText: ["",""],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
        }
    })
    /*var owl=$(".owl-carousel");
    owl.owlCarousel();
    $('.carousel-next').click(function(){
        owl.trigger("next.owl.carousel");
    });
    $('.carousel-prev').click(function(){
        owl.trigger("prev.owl.carousel");
}); */ 
    $('.offer').hover(function(){
        $(this).children('.offer .tour-details').fadeIn(200);
        }, 
     function(){
        $('.offer .tour-details').fadeOut(200);
        
        });
        

       $('.media-navbar a').click(function(){
           $('.media-navs').slideToggle(400);
           $('.header').css({'background-color':'white'});
       });

       $('.carousel-item-1').hover(function(){
           $(this).children('.carousel-item-info').css({'top':'20%','position':'absolute','height':'80%','transition-duration':'0.5s'});
       },
       function(){
           $(this).children('.carousel-item-info').css({'top':'80%','position':'absolute','height':'20%'});
       });
});

$(window).scroll(function(){
    if($(this).scrollTop() > 100) {
        $('.header').css({'background-color':'white','transition-duration':'0.5s'});
    }
    if($(this).scrollTop() < 100) {
        $('.header').css({'background-color':'transparent'});
    }
}); 

