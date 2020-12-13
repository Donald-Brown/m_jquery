$(function() {
  let nextSlide = $('#slides img:first-child');
  let nextCaption, nextSlideSource;

  //* start the slide show
  setInterval(function() {
    $('#caption').fadeOut(1000);
    $('#slide').fadeOut(1000, function() {
      if (nextSlide.next().length === 0) {
        nextSlide = $('#slides img:first-child');
      } else {
        nextSlide = nextSlide.next();
      }
      nextSlideSource = nextSlide.attr('src');
      nextCaption = nextSlide.attr('alt');
      $('#slide').attr('src', nextSlideSource).fadeIn(1000);
      $('#caption').text(nextCaption).fadeIn(1000);
    });
  }, 3000);
}); // end ready 