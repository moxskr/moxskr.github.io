$(document).ready(function(){
    $('.projects-grid').masonry({
        itemSelector : '.projects-item'
    });
    $('.numbers h1').each(function(){
        var i = 1,
        number = $(this).data('number'),
        step = 2000 /number,
        that = $(this),
        int = setInterval(function(){
            if ( i < number ){
                that.html(i);
            }
            else{
            clearInterval(int);
            }
        i++;
        }, step);
    });
});


var clickToScroll = function(id){
    $(document).ready(function(){
        $('html, body').animate({
            scrollTop: parseInt($("#"+id).offset().top)
        }, 500);
    })
 };

$(window).scroll(function(){
    if($(this).scrollTop() > 300){
        $('.top-header').css({transitionDuration:'0.5s',backgroundColor:'rgba(1,1,1,0.65)',position : 'fixed'});
        $('.top-header nav').css({paddingBottom : '10px',paddingTop : '28px'});
        $('.logo').css({paddingTop : '10px',paddingBottom : '10px'})
    }
    else{
        $('.top-header').css({transitionDuration:'0.5s',backgroundColor:'transparent',position : 'absolute'});
        $('.top-header nav').css({paddingBottom : '50px',paddingTop : '52px'});
        $('.logo').css({paddingTop : '30px',paddingBottom : '0px'})
    }

    
});