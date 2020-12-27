$(function() {
  $('#email').focus();

  //* place the current date in the start_date text box
  const today = new Date();
  const month = today.getMonth() + 1; //! add 1 because months starts at 0
  const day = today.getDate();
  const year = today.getFullYear();
  let dateText = ((month < 10) ? '0' + month : month) + '/';
  dateText += ((day < 10) ? '0' + day : day) + '/';
  dateText += year;
  $('#start_date').val(dateText);

  $('#member_form').validate({
    rules: {
      email: {
        required: true, 
        email: true
      },
      password: {
        required: true, 
        minlength: 6
      },
      verify: {
        required: true,
        equalTo: '#password'
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
        rangelength: [5, 10]
      },
      phone: {
        required: true,
        phoneUS: true
      },
      start_date: {
        required: true,
        date: true
      }, 
      card_number: {
        required: true,
        creditcard: true
      },
      exp_date: {
        required: true
      }
    },
    messages: {
      email: {
        required: 'Please supply an email address',
        email: 'This email is not valid'
      },
      first_name: {
        required: 'You must supply a first name'
      }
    }
  }); //? end validate
}); //? end ready