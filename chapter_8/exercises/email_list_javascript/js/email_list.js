$(function() {
  //* add a span element after each input element
  $(':text').after('<span></span>');

  //* move the focus to the first text box
  $('#email1').focus();

  //* the handler for the click event of a submit button
  $('#email_form').submit(function(e) {
    let isValid = true;

    //* validate the email entry with a regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;
    const email1 = $('#email1').val();
    if (email1 === '') {
      $('#email1').next().text('This field is required.');
      isValid = false;
    } else if (!emailRegex.test(email1)) {
      $('#email1').next().text('Must be a valid email address');
      isValid = false;
    } else {
      $('#email1').next().text('');
    }

    //* validate second email entry
    const email2 = $('#email2').val();
    if (email2 === '') {
      $('#email2').next().text('This field is required.');
      isValid = false;
    } else if (email2 !== email1) {
      $('#email2').next().text('Must equal previous value');
      isValid = false;
    } else {
      $('#email2').next().text('');
    }

    //* validate first_name entry
    const firstName = $('#first_name').val().trim();
    if (firstName === '') {
      $('#first_name').next().text('This field is required.');
      isValid = false;
    } else {
      $('#first_name').val(firstName);
      $('#first_name').next().text('');
    }

    //* validate last_name entry
    const lastName = $('#last_name').val().trim();
    if (lastName === '') {
      $('#last_name').next().text('This field is required.');
      isValid = false;
    } else {
      $('#last_name').val(lastName);
      $('#last_name').next().text('');
    }

    //* validate state entry
    const state = $('#state').val();
    const stateRegex = /^((A[LKZR])|(C[AOT])|(D[EC])|(FL)|(GA)|(HI)|(I[DLNA])|(K[SY])|(LA)|(M[EDAINSOT])|(N[EVHJMYCD])|(O[HKR])|(PA)|(RI)|(S[CD])|(T[NX])|(UT)|(V[TA])|(W[AVIY]))$/i;
    if (state === '') {
      $('#state').next().text('This field is required');
      isValid = false;
    } else if (!stateRegex.test(state)) {
      $('#state').next().text('Must be a valid 2-character state code.');
      isValid = false;
    } else {
      $('#state').next().text('');
    }

    //* validate zipcode
    const zip = $('#zip').val();
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (zip === '') {
      $('#zip').next().text('This field is required.');
      isValid = false;
    } else if (!zipRegex.test(zip)) {
      $('#zip').next().text('Must be 99999 or 99999-9999 format.');
      isValid = false;
    } else {
      $('#zip').next().text('');
    }

    //* prevent the default action of the submit if any entries are invalid
    if (!isValid) {
      e.preventDefault();
    }

  }); //? end submit
}); //? end ready