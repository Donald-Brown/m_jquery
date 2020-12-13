$(function() {
  let nextSlide = $('#slides img:first-child'), nextCaption, nextSlideSource;

  // the function for running slide show
  let runSlideShow = () => {
    $('#caption').fadeOut(1000);
    $('#slide').fadeOut(1000, () => {
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
  }

  //* start slide show
  let timer1 = setInterval(runSlideShow, 3000);

  //? starting and stopping the slide show
  $('#button').click(() => {
    if (timer1 !== null) {
      clearInterval(timer1);
      timer1 = null;
      $('#button').text('Play');
    } else {
      timer1 = setInterval(runSlideShow, 3000);
      $('#button').text('Pause');
    }
  }); // end click
}); // end ready