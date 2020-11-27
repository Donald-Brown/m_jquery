let $ = function(id) {
  return document.getElementById(id);
}

let calculateMPG = function(miles, gallons) {
  return miles / gallons;
}

let processData = function() {  
  let miles = parseFloat($('miles_driven').value).toFixed(2);
  let gallons = parseFloat($('gallons').value).toFixed(2);

  console.log(miles);

  if (isNaN(miles) || miles <= 0) {
    alert('Miles Driven must be a positive number above zero.');
  } else if (isNaN(gallons) || gallons <= 0) {
    alert('Gallons must be a postitve number above zero');
  } else {
    $('mpg').value = calculateMPG(miles, gallons).toFixed(0) + ' mpg';
  }
}

window.onload = function() {
  $('calculate').onclick = processData;
  $('miles_driven').focus();
}