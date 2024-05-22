$(document).ready(function () {
        $('.menu-burger__header').click(function () {
                $('.menu-burger__header').toggleClass('open-menu');
                $('.header__nav').toggleClass('open-menu');
                $('body').toggleClass('fixed-page');
                $('.gastroPhoto_1').toggleClass('display');
                $('.gastroPhoto_1480').toggleClass('display');
                $('.photo1').toggleClass('display');
                $('.photo2').toggleClass('display');
                $('.arrowImg2').toggleClass('display');
                $('.arrowImg1').toggleClass('display');
                $('.swiper-pagination').toggleClass('display');
                
        });
});

$(document).ready(function () {
        $('.arrowMain').click(function () {
                $('.arrowMain').toggleClass('overturn')
                $('.listTours').toggleClass('open')
                $('.icons').toggleClass('open')
        })
})

