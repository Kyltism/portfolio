
$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
        $('.swiper').toggleClass('index');
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

$(document).ready(function () {
    $('.day1').click(function () {
        $('.day1').toggleClass('color')
        $('.day1Text').toggleClass('open')


    })
})

$(document).ready(function () {
    $('.day2').click(function () {
        $('.day2').toggleClass('color')
        $('.day2Text').toggleClass('open')


    })
})


$(document).ready(function () {
    $('.day3').click(function () {
        $('.day3').toggleClass('color')
        $('.day3Text').toggleClass('open')
     })
})


$(document).ready(function () {
    $('.day4').click(function () {
        $('.day4').toggleClass('color')
        $('.day4Text').toggleClass('open')
   

    })
})


$(document).ready(function () {
    $('.day5').click(function () {
        $('.day5').toggleClass('color')
        $('.day5Text').toggleClass('open')
       $('.group32').toggleClass('open')

    })
})

