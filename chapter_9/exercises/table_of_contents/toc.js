$(function() {
  // add an h2 heading to the aside
  $('aside').append('<h2>Table of Contents</h2>');

  // insert a back to top
  $('aside').append('<br><a href="#heading1">Back to top</a>');

  // wrap the h2 text in the article in <a> tags 
  $('article h2').wrapInner('<a></a>');

  // add ids to the new a tags
  $('article a').attr('id', index => 'heading' + (index + 1));

  // clone the a tags in the article and insert them into the aside, remove ids, and add href
  $('article a').clone().insertAfter($('aside h2'))
                        .removeAttr('id')
                        .attr('href', index => '#heading' + (index + 1));

  // remove the id attributes from the a tags in the aside
  // $('aside a').removeAttr('id');

  // add the href attributes to the a tags in the aside
  // $('aside a').attr('href', index => '#heading' + (index + 1));

  //set indents
  // $('article p').nextUntil('h2').css('text-indent', '1.5em');
  $('article p').not($('article h2').next()).css('text-indent', '1.5em');
  // console.log($('article h2').next())
  // console.log($('article p').not($('article h2').next()))
  // $('article h2').next().css('text-indent', '0');


  //* change the css for the selected topic and move the TOC
  $('aside a').click(function() {
    // get the id selector of the selected h2 element from the a tag
    const id = $(this).attr('href');
    // console.log(id);

    // change the styles for the selected heading
    $(id).css( {'color': 'orangered', 'font-size': '150%'} );
    $('article a').not($(id)).css( {'color': '#000', 'font-size': '120%'} );


    // move the aside so it is next to the selected heading
    const h2Offset = $(id).offset().top;
    const asideHeight = $('aside').height();
    const articleHeight = $('article').height();
    let asideOffset;
    if ((h2Offset + asideHeight) <= articleHeight) {
      asideOffset = h2Offset;
    } else {
      asideOffset = articleHeight - asideHeight;
    }
    $('aside').css('top', asideOffset);
  }); //? end click

}); //? end ready