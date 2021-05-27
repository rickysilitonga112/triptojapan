$(document).ready(function () {
  console.log("checkout js ready");

  // datepicker
  $(".datepicker").datepicker({
    uiLibrary: "bootstrap4",
    icons: {
      rightIcon: '<img src="assets/icons/ic_doe.png" />',
    },
  });
});
