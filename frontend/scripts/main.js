$(document).ready(function () {
  console.log("ready!");

  $("#main_image, .xzoom-gallery").xzoom({
    zoomWidth: 550,
    title: false,
    tint: "#333",
    xoffset: 15,
  });
});
