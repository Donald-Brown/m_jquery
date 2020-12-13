$(function() {
  // slider = ul element
  let slider = $('#image_list');
  let leftProperty, newLeftProperty;

  //* the click event handler for the right button
  $('#right_button').click(function() {
    // get the value of the current left property
    leftProperty = parseInt(slider.css('left'));

    //determine new value of left property
    if (leftProperty - 300 <= -900) {
      newLeftProperty = 0; 
    } else {
      newLeftProperty = leftProperty - 300;
    }

    // use the animate method to change the left proterty
    slider.animate({ left: newLeftProperty }, 1000);
  }); //? end right click

  //* the click event handler for the left click
  $('#left_button').click(function() {
    // get value of the current right property
    leftProperty = parseInt(slider.css('left'));

    // determine new value of left property
    if (leftProperty < 0) {
      newLeftProperty = leftProperty + 300;
    } else {
      newLeftProperty = 0;
    }

    // use the animate method to change the left property
    slider.animate({ left: newLeftProperty }, 1000);
  }); //? end left click
}); //? end ready