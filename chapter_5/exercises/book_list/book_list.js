$(function() {
  // preload images
  $('ul li a').each(function() {
    let image = new Image()
    image.src = $(this).attr('href');

    $(this).click(function(e) {
      $('#image').attr('src', $(this).attr('href'));
      e.preventDefault();
    }); //? end click
  }); //? end each

  $('#catagories h2').click(function() {
    $(this).toggleClass('minus');
    if ($(this).attr('class') != 'minus') {
      $(this).next().hide();
    } else {
      $(this).next().show();
    }
    $('#image').attr('src', '');
  }); //? end click

  
}); //? end ready