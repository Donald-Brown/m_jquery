$(function() {
  $('#email_1').focus();

  // //* add a span after each input
  // $(':text').after('<span></span>');

  $('#email_form').validate({
    rules: {
      email_1: {
        required: true,
        email: true
      },
      email_2: {
        required: true,
        email: true,
        equalTo: '#email_1'
      },
      first_name: {
        required: true
      }, 
      last_name: {
        required: true
      },
      state: {
        required: true,
        rangelength: [2, 2]
      },
      zip: {
        required: true,
        digits: true, 
        rangelength: [5, 5]
      }
    },
    messages: {
      zip: {
        rangelength: 'Please enter a 5-digit zip code.',
        digits: 'Please enter a 5-digit zip code'
      },
      state: {
        rangelength: 'Please enter a 2-character code'
      },
      email_2: {
        equalTo: 'must equal previous entry'
      }
    }
  }); //? end validate
}); //? end ready