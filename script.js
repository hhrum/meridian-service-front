$(document).ready(function () {
    $('.show-header-button').click(function () {
        $('.header-menu').addClass('active');
        $("body").addClass("no-scroll");
    })
    $('.hide-header-button').click(function () {
        $('.header-menu').removeClass('active');
        $("body").removeClass("no-scroll");
    })
})