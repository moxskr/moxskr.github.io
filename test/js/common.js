$(document).ready(function () {

    const clickFuncModal = function (obj) {
        obj.click(function () {

            $('.image-modal').css({ display : 'flex' });
            let image = document.getElementById('modal-src');
            image.src = this.dataset.image;

        });

        $('.close-image').click(function () {

            $('.image-modal').css({ display : 'none' });

        });
    };

    clickFuncModal($('.qualification img'));
    clickFuncModal($('.works img'));

    $('.owl-carousel').owlCarousel({
        loop : true,
        margin : 0,
        nav : false,
        dots : false,
        autoHeight: true,
        responsive : {
            0 : {
                items : 1
            },
        }
    });

    $('.carousel-navs .prev').click(function(){
        $('.owl-carousel').trigger('prev.owl.carousel');
    });

    $('.carousel-navs .next').click(function(){
        $('.owl-carousel').trigger('next.owl.carousel');
    });

    $('.media-nav').click(function () {
        $('.media-navbar').css({display : 'flex'});
    });

    $('.close-media-btn').click(function () {
        $('.media-navbar').css({display : 'none'});
    })
});
