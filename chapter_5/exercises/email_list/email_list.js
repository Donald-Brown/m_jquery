$(function() {
  $('#join_list').click(
    function() {
      let emailAddress1 = $('#email_address1').val();
      let emailAddress2 = $('#email_address2').val();
      let isValid = true;

      // validate first email address
      if (emailAddress1 === '') {
        $('#email_address1_error').text('This field is required.');
        isValid = false;
      } else {
        $('#email_address1_error').text('');
      }

      // validate the second address
      if (emailAddress2 === '') {
        $('#email_address2_error').text('This field is required.');
        isValid = false;
      } else if (emailAddress1 !== emailAddress2) {
        $('#email_address2_error').text('This entry must equal the first entry');
        isValid = false;
      } else {
        $('#email_address2_error').text('');
      }

      // validate the first name
      if ($('#first_name').val() === '') {
        $('#first_name_error').text('This field is required');
        isValid = false;
      } else {
        $('#first_name_error').text('');
      }

      // submit the form if all are valid
      if (isValid) {
        $('#email_form').submit();
      }
    } // end funtion
  ); // end click

  $('#clear_entries').click(function() {
    $(':text').val('');
    $(':text').next().text('*');
    $('#email_address1').focus();
  }); // end click

  $(':text').dblclick(function() {
    // $('#clear_entries').click();
    $(this).val('');
    $(this).next().text('*')
  }); // end double click

  $('#email_address1').focus();
}); // end ready