$(function() {
  //* add an h2 heading to the aside
  $('aside').append('<h2>Table of contents</h2>');

  //* wrap the h2 text in the article whithin a tags
  $('article h2').wrapInner('<a></a>');

  //* add ids to the new a tags
  $('article a').attr('id', index => 'heading' + (index + 1));

  //* clone the a tags in the article and insert them into the aside
  $('article a').clone().insertAfter($('aside h2'));

  //* remove the ids from the a tags in the aside
  $('aside a').removeAttr('id');

  //* add the href attributes to the a tags in the aside
  $('aside a').attr('href', index => '#heading' + (index + 1));

  //* change the css for the selected topic and move the TOC
  $('aside a').click(function() {
    //* get the id selector or the selected h2 element from the a tag
    id = $(this).attr('href');

    //* change the styles for the selected heading
    $(id).css( {'color': 'orangered', 'font-size': '150%'} );

    //* move the aside so it is next to the selected heading
    let h2Offset = $(id).offset().top;
    console.log(h2Offset);
    let asideHeight = $('aside').height();
    console.log(asideHeight);
    let articleHeight = $('article').height();
    console.log(articleHeight);
    // let asideOffset;
    if ((h2Offset + asideHeight) <= articleHeight) {
      asideOffset = h2Offset;
    } else {
      asideOffset = articleHeight - asideHeight;
    }
    $('aside').css('top', asideOffset);

  }); //? end click
}); //? end ready