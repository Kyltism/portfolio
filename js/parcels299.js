$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
        $('.swiper').toggleClass('index');
        $('.swiper-pagination').toggleClass('display');
        $('.swiper-pagination2').toggleClass('display');


        
    });
});



$(document).ready(function () {
    $('.arrowMain').click(function () {
            $('.arrowMain').toggleClass('overturn')
            $('.listTours').toggleClass('open')
            $('.icons').toggleClass('open')
    })
})