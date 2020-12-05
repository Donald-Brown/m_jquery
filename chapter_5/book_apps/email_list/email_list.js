$(function() {
  $('#join').click(
    function() {
      let email1 = $('#email1').val();
      let email2 = $('#email2').val();
      let isValid = true;

      // validate first email
      if (email1 === '') {
        $('#email1_error').text('This field is required.');
        isValid = false;
      } else {
        $('email1_error').text('');
      }

      // validate second email address
      if (email2 === '') {
        $('#email2_error').text('This field is required');
        isValid = false;
      } else if (email1 !== email2) {
        $('#email2_error').text('this enter must equal the first.');
        isValid = false;
      } else {
        $('#email2_error').text('');
      }

      // validate the first name entry
      if ($('#first').val() === '') {
        $('#first').next().text('This field is required.');
        isValid = false;
      } else {
        $('#first').next().text('');
      }

      // submit if entries are valid
      if (isValid) {
        $('#email_form').submit();
      }

    } // end function
  );  //end click
  $('#email1').focus();
}); // end of ready