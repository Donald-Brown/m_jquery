$(function() {
  $('#image_rollovers img').each(function() {
    //* get old and new urls
    let oldURL = $(this).attr('src');
    let newURL = $(this).attr('id');

    //* preload images
    let image = new Image();
    image.src = newURL;

    //* set up event handlers
    // $(this).hover(
    //   function() {
    //     $(this).attr('src', newURL);
    //   },
    //   function() {
    //     $(this).attr('src', oldURL);
    //   }
    // ); //? end hover
    $(this).mouseover(function() {
      $(this).attr('src', newURL);
    }); //? end mouseover

    $(this).mouseout(function() {
      $(this).attr('src', oldURL);
    }); //? end mouseout

  }); //? end each
}); //? end ready