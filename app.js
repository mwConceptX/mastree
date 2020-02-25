AOS.init();

$(".navbar-collapse a").click(function(e) {
  $(".navbar-collapse").collapse("toggle");
});

$(".jumbotron").css({
  height: $(window).height() + "px"
});

$(window).on("resize", function() {
  $(".jumbotron").css({
    height: $(window).height() + "px"
  });
});

gsap.from(".letter", {
  duration: 2,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic",
  force3D: true
});
