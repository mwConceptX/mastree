AOS.init();

$('.navbar-collapse a').click(function (e) {
    $('.navbar-collapse').collapse('toggle');
});


$(".jumbotron").css({
    height: $(window).height() + "px"
});

$(window).on("resize", function () {
    $(".jumbotron").css({
        height: $(window).height() + "px"
    });
});