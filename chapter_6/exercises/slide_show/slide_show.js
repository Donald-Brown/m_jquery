$(function() {
  let nextSlide = $('#slides img:first-child');
  let nextCaption, nextSlideSource;

  //* start the slide show
  timer1 = setInterval(function() {
    $('#caption').hide(1000);
    $('#slide').slideUp(2000, function() {
      if (nextSlide.next().length === 0) {
        nextSlide = $('#slides img:first-child');
      } else {
        nextSlide = nextSlide.next();
      }
      nextSlideSource = nextSlide.attr('src');
      nextCaption = nextSlide.attr('alt');
      $('#slide').attr('src', nextSlideSource).slideDown(2000);
      $('#caption').text(nextCaption).show(1000);
    }); //? end slideUp
  }, 5000);
}); //? end ready