(function($) {
  $.fn.displaySelection = function() {
    return this.each(function() {
      alert(`the text for the selection is '${$(this).text()}'`);
    });
  }
})(jQuery);