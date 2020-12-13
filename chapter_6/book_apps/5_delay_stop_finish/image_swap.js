$(function() {
  //* preload images
  $('#image_list a').each(function() {
    let image = new Image();
    image.src = $(this).attr('href');
  }); //? end each

  //* set up event handlers for links
  $('#image_list a').hover(function(e) {
    //* animate thumbnail
    $(this).stop(true).animate({ top: 15}, 'fast');
    // $(this).stop(true, true).animate({ top: 15 }, "fast");
    // $(this).finish().animate({ top: 15 }, "fast");

    //* swap image
    let imageURL = $(this).attr('href');
    $('#image').attr('src', imageURL);

    //* swap caption
    let caption = $(this).attr('title');
    $('#caption').text(caption);

    //* cancel the default action of the link
    e.preventDefault(); // jQuery cross-compatible method

  }, function(e) {
    //* animate thumbnail
    $(this).stop(true).animate({ top: 0}, 'fast');
    // $(this).stop(true, true).animate({ top: 0 }, "fast");
    //$(this).finish().animate({ top: 0 }, "fast");
  }); //? end hover
}); //? end ready