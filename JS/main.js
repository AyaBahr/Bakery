$(document).ready(function () {
    $('#loading i').fadeOut(1000, () => {
        $('#loading').fadeOut(1000);
        $('body').css('overflow-y', 'auto')
    })
    let aboutOffset = $('#about').offset().top
    $(window).scroll(function () {
        let wScroll = $(window).scrollTop();
        if (wScroll >= aboutOffset - 100) {
            $('#main-nav').css('cssText', 'background-color : rgba(142, 119, 84,0.5) !important ')
            $('#main-nav .navbar-brand img').attr('src', 'images/bakery-dark.png ')
            $('nav ul li a ').css('cssText', 'color : var(--main-head) !important ')
        }
        else {
            $('#main-nav').css('cssText', 'background-color : transparent !important ');
            $('#main-nav .navbar-brand img').attr('src', 'images/bakery-light-1.png ')
            $('nav ul li a ').css('cssText', 'color : #fff !important ')
        }
    })
    $('.nav-link[href^="#"]').click(function (e) {
        let linkHref = $(e.target).attr('href');
        let linkOffset = $(linkHref).offset().top;
        $('html,body').animate({ scrollTop: `${linkOffset}px` }, 2000)

    })
    $('#side i').click(function () {
        let wBox = $('.color-box').innerWidth();
        if ($("#side").css('right') == '0px') {
            $('#side').animate({ right: `-${wBox}px` }, 1000)
        }
        else {
            $('#side').animate({ right: `0px` }, 1000)

        }
    })

    let colorItems = $('.color-item')
    let colors = ['#C8B6A6', '#9E7676', '#8e7754', '#594545'];

    for (let i = 0; i < colorItems.length; i++) {
        colorItems.eq(i).css('backgroundColor', colors[i])
    }

    $(colorItems).click(function (e) {
        let colorTheme = $(e.target).css('backgroundColor')
        $(':root').css('--main-color', colorTheme)
    })
})