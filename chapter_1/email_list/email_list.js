let $ = function(id) {
  return document.getElementById(id);
}

//* the join list function validates the entries and submits the form on positive validation

let joinList = function() {
  let emailAddress1 = $('email_address1').value;
  let emailAddress2 = $('email_address2').value;
  let isValid = true;
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let nameRegex = /^[a-z]{2,}$/i;

  //? validate email
  if (!emailRegex.test(emailAddress1)) {
    $('email_address1_error').firstChild.nodeValue = 'Please enter a valid email address';
    isValid = false;
  } else {
    $('email_address1_error').firstChild.nodeValue = '';
  }

  //? confirm email 2 matches
  if (emailAddress1 !== emailAddress2) {
    $('email_address2_error').firstChild.nodeValue = 'email addresses must match';
    isValid = false;
  } else { 
    $('email_address2_error').firstChild.nodeValue = '';
  }

  //? Validate first name
  if (!nameRegex.test($('first_name').value)) {
    $('first_name_error').firstChild.nodeValue = 'Name must be at least two characters';
    isValid = false;
  } else {
    $('first_name_error').firstChild.nodeValue = '';
  }

  if (isValid) {
    $('email_form').submit();
  }
}

window.onload = function() {
  $('join_list').onclick = joinList;
  $('email_address1').focus();
}


//* testing my skills
// window.onload = function() {
//   document.getElementById('join_list').addEventListener('click', function() {
//     document.getElementById('email_form').submit();
//   });
// }