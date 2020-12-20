(function($) {
  $.fn.reveal = function() {
    return this.each(function() {
      // setting up the click event handler for the elements
      $(this).click(function() {
        $(this).toggleClass('minus');
        if ($(this).attr('class') !== 'minus') {
          $(this).next().slideUp(500);
        } else {
          $(this).next().slideDown(500);
        }
      }); //? end click
    });
  }
})(jQuery);