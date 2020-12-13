$(function() {
  //* runs when h2 is clicked
  $('#faqs h2').click(function() {
    $(this).toggleClass('minus');
    if ($(this).attr('class') === 'minus') {
      $(this).next().slideDown(1000, 'easeOutBounce');
    } else {
      $(this).next().slideUp(1000, 'easeOutBounce');
    }
  }); //? end click

  //* runs when page is ready 
  $('#faqs h1').animate( 
    { fontSize: '650%', opacity: 1, left: '+=375'}, 1000, 'easeInExpo'
  ).animate(
    { fontSize: '175%', left: '-=200' }, 1000, 'easeInExpo'
  );

  //* runs when top level heading is clicked
  $('#faqs h1').click(function() {
    $(this).animate(
      { fontSize: '650%', opacity: 1, left: '+=375' }, 2000, 'easeInExpo'
    ).animate(
      { fontSize: '175%', left: 0 }, 1000, 'easeOutExpo'
    );
  }); //? end click
}); //? end ready