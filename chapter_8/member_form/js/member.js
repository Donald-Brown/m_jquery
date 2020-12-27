$(function() {
  //* add a span element after each input element
  $(':text, :password').after('<span></span>');

  //* move the focus to the first text box
  $('#email').focus();

  //* put todays date in the start_date text box
  const today = new Date();
  const month = today.getMonth() + 1; //! add 1 since months start at 0
  const day = today.getDate();
  const year = today.getFullYear();
  let dateText = ((month < 10) ? '0' + month : month) + '/'; //! Pad month
  dateText += ((day < 10) ? '0' + day : day) + '/';//! Pad date
  dateText += year;
  $('#start_date').val(dateText);

  //* handler for the click event of the submit button
  $('#member_form').submit(function(e) {
    let isValid = true;

    //* validate email entry with a regular expression
    let emailRegex = /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;
    let email = $('#email').val();
    if (email === '') {
      $('#email').next().text('This field is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      $('#email').next().text('Must be a valid email address.');
      isValid = false;
    } else {
      $('#email').next().text('');
    }

    //* password validation via regex
    const password = $('#password').val();
    if (password.length < 6) {
      $('#password').next().text('Must be 6 or more characters.');
      isValid = false;
    } else {
      $('#password').next().text('');
    }

    //* validate the verify password
    if ($('#verify').val() === '') {
      $('#verify').next().text('This field is required.');
      isValid = false;
    } else if ($('#verify').val() !== $('#password').val()) {
      $('#verify').next().text('Must match password.');
      isValid = false;
    } else {
      $('#verify').next().text('');
    }

    //* validate the first_name entry
    const firstName = $('#first_name').val().trim();
    if (firstName === '') {
      $('#first_name').next().text('This field is required.');
      isValid = false;
    } else {
      $('#first_name').val(firstName);
      $('#first_name').next().text('');
    }

    //* validate the last_name entry
    const lastName = $('#last_name').val().trim();
    if (lastName === '') {
      $('#last_name').next().text('This field is required.');
      isValid = false;
    } else {
      $('#last_name').val(lastName);
      $('#last_name').next().text('');
    }

    //* validate the state entry
    const stateRegex = /^((A[LKZR])|(C[AOT])|(D[EC])|(FL)|(GA)|(HI)|(I[DLNA])|(K[SY])|(LA)|(M[EDAINSOT])|(N[EVHJMYCD])|(O[HKR])|(PA)|(RI)|(S[CD])|(T[NX])|(UT)|(V[TA])|(W[AVIY]))$/i;
    const state = $('#state').val();
    if (state === '') {
      $('#state').next().text('This field is required.');
      isValid = false;
    } else if (!stateRegex.test(state)) {
      $('#state').next().text('Must be a valide two character state');
      isValid = false;
    } else {
      $('#state').next().text('');
    }

    //* validate the zip code entry regex
    const zipRegex = /^\d{5}(-\d{4})?$/;
    const zip = $('#zip').val();
    if (zip === '') {
      $('#zip').next().text('This field is required.');
      isValid = false;
    } else if (!zipRegex.test(zip)) {
      $('#zip').next().text('Use either 99999 or 99999-9999 format.');
      isValid = false;
    } else {
      $('#zip').next().text('');
    }

    //* validate the phone number regex
    if ($('#phone').val() === '') {
      $('#phone').next().text('This field is required.');
      isValid = false;
    } else {
      $('#phone').next().text('');
    }

    //* validate the start date 
    $('#start_date').next().text('');

    //* prevent the submission of the form if any of the entries are invalid
    if (isValid === false) {
      e.preventDefault();
    }
  })//? end submit
}); //? end ready