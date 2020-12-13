$(function() {
  let slider = $('#image_list');
  let leftProperty, newLeftProperty;

  //* the click event handler for the right button
  $('#right_button').click(function() {
    // get the value of the current left property
    leftProperty = parseInt(slider.css('left'));
    // determine new value of the left property
    if (leftProperty - 100 <= -900) {
      newLeftProperty = 0;
    } else {
      newLeftProperty = leftProperty - 100;
    }
    // use the animate method to change the left property
    slider.animate({ left: newLeftProperty }, 1000);
  }); //? end right button click

  //* the click event handler for the left button
  $('#left_button').click(function() {
    // get value of the current left property
    leftProperty = parseInt(slider.css('left'));
    // determine the new value of the left property

    if (leftProperty < 0) {
      newLeftProperty = leftProperty + 100;
    } else {
      newLeftProperty = -800;
    }

    // use the animate function to change the left property
    slider.animate({ left: newLeftProperty }, 1000);
  }); //? end left button click
}); //? end ready