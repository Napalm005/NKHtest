$(function() {
    var nav = $('.nav__item--home');
    var nav2 = $('.nav__item--business');

    nav.add(nav2).on('click', function () {
        if ($(this).next().hasClass('open')) {
            $(this).next().slideUp().removeClass('open');
        } else {
            $(this).siblings(".open").slideUp().removeClass('open');
            $(this).next().slideDown().addClass('open');
        }
    })
})