$(function() {
  //* preload images
  $('#image_list a').each(function() {
    let swappedImage = new Image();
    swappedImage.src = $(this).attr('href');
  }); //end preload images

  // set up event handlers for links
  $('#image_list a').click(function(e) {
    // swap image
    let imageURL = $(this).attr('href');
    $('#image').attr('src', imageURL);

    // swap caption
    let caption = $(this).attr('title');
    $('#caption').text(caption);

    // cancel the default action of the link
    e.preventDefault();
  }); // end click

  // move the focus to first thumbnail
  $('li:first-child a').focus();
}); // end ready