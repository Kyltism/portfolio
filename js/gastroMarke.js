$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
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
        $('.arrowGod1').attr('src', '../img/ArrowGod.png')
        $('.arrowGod1').toggleClass('rotate')
        $('.arrowGod1.rotate').attr('src', '../img/ArrowGodRotate.png')

    })
})

$(document).ready(function () {
    $('.day2').click(function () {
        $('.day2').toggleClass('color')
        $('.day2Text').toggleClass('open')
        $('.arrowGod2').attr('src', '../img/ArrowGod.png')
        $('.arrowGod2').toggleClass('rotate')
        $('.arrowGod2.rotate').attr('src', '../img/ArrowGodRotate.png')

    })
})


$(document).ready(function () {
    $('.day3').click(function () {
        $('.day3').toggleClass('color')
        $('.day3Text').toggleClass('open')
        $('.arrowGod3').attr('src', '../img/ArrowGod.png')
        $('.arrowGod3').toggleClass('rotate')
        $('.arrowGod3.rotate').attr('src', '../img/ArrowGodRotate.png')

    })
})


$(document).ready(function () {
    $('.day4').click(function () {
        $('.day4').toggleClass('color')
        $('.day4Text').toggleClass('open')
        $('.arrowGod4').attr('src', '../img/ArrowGod.png')
        $('.arrowGod4').toggleClass('rotate')
        $('.arrowGod4.rotate').attr('src', '../img/ArrowGodRotate.png')

    })
})


$(document).ready(function () {
    $('.day5').click(function () {
        $('.day5').toggleClass('color')
        $('.day5Text').toggleClass('open')
        $('.arrowGod5').attr('src', '../img/ArrowGod.png')
        $('.arrowGod5').toggleClass('rotate')
        $('.arrowGod5.rotate').attr('src', '../img/ArrowGodRotate.png')

    })
})