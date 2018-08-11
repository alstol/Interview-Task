/*
    Mostly Navbar behaviour...
*/
$(document).ready(() => {
    var showPage = (id) => {
        $('.split-layout ').fadeOut();
        $(`${id}-page`).fadeIn();
    }

    if (window.location.hash.substr(1) === "random") {
        showPage('#random')
    }

    $('#nav-trigger').click(() => {
        $('#nav-trigger').toggleClass('open');
        $('nav').toggleClass('open');
    });

    $('nav ul li a').click((e) => {
        var target = e.currentTarget.hash;
        showPage(target);
        $('#nav-trigger').toggleClass('open');
        $('nav').toggleClass('open');
    });
})