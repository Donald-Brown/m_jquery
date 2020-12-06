$(document).ready(function () {
  $("#faqs h2").click(function () {
    $(this).toggleClass("minus");
    if ($(this).attr("class") !== "minus") {
      $(this).next().hide(2000);
    } else {
      $(this).next().show("slow");
    }
  });
});
