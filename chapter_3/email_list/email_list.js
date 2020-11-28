let $ = function(id) {
  return document.getElementById(id);
}

let joinList = function() {
  //? get inputs
  let email1 = $('email1').value;
  let email2 = $('email2').value;
  let name = $('name').value;
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let nameRegex = /^[a-z]{2,}$/i;
  let isValid = true;

  //? validate entries
  if (!emailRegex.test(email1)) {
    $('email1_error').firstChild.nodeValue = 'Must be a valid email address.';
    isValid = false;
  } else {
    $('email1_error').firstChild.nodeValue = '';
  }
  
  if (!emailRegex.test(email2)) {
    $('email2_error').firstChild.nodeValue = 'Must be a valid email address.';
    isValid = false;
  } else if (email2 !== email1) {
    $('email2_error').firstChild.nodeValue = 'Must match email address.';
    isValid = false;
  } else {
    $('email2_error').firstChild.nodeValue = '';
  }

  if (!nameRegex.test(name)) {
    $('name_error').firstChild.nodeValue = 'name must be at least two alpha charaters';
    isValid = false;
  } else {
    $('name_error').firstChild.nodeValue = '';
  }

  if (isValid) {
    $('join_list').submit();
  }
}

window.onload = function() {
  $('join').onclick = joinList;
  $('email1').focus();

}
