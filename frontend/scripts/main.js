$(document).ready(function () {
  console.log("ready");
  $("#main_image, .xzoom-gallery").xzoom({
    zoomWidth: 550,
    title: false,
    tint: "#333",
    xoffset: 15,
  });

  // smooth scrolling
  $(".page-scroll").on("click", function (e) {
    var href = $(this).attr("href");
    var elemenTujuan = $(href);
    console.log(elemenTujuan.offset().top);

    // pindahkan scroll
    $("html, body").animate(
      {
        scrollTop: elemenTujuan.offset().top - 120,
      },
      800,
      "easeInOutExpo"
    );

    e.preventDefault();
  });
});
