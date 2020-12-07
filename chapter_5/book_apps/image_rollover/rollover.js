$(function() {
  $('#image_rollover img').each(function() {
    // get old and new urls
    let oldURL = $(this).attr('src');
    let newURL = $(this).attr('id');

    // preload rollover image
    let rolloverImage = new Image();
    rolloverImage.src = newURL;

    // set up event handlers
    $(this).hover(
      function() {
        $(this).attr('src', newURL);
      },
      function() {
        $(this).attr('src', oldURL);
      }
    ); // end hover
  }); // end each
}); // end ready