let $ = function(id) {
  return document.getElementById(id);
}

let toggle = function() {
  let h2 = this;
  let div = h2.nextElementSibling;

  if (h2.hasAttribute('class')) {
    h2.removeAttribute('class');
  } else {
    h2.setAttribute('class', 'minus');
  }

  if (div.hasAttribute('class')) {
    div.removeAttribute('class');
  } else {
    div.setAttribute('class', 'open');
  }
}

let toggleStyleSheet = function() {
  let sheets = document.getElementsByTagName('link');
  if (sheets[0].hasAttribute('disabled')) {
    sheets[0].removeAttribute('disabled');
    sheets[1].setAttribute('disabled', 'true');
  } else {
    sheets[1].removeAttribute('disabled');
    sheets[0].setAttribute('disabled', 'true');
  }
}

// console.log(document.getElementsByTagName('link'));
// console.log(document.styleSheets);
// let sheets = document.getElementsByTagName('link');
// sheets[0].removeAttribute('disabled');

window.onload = function() {
  let links = $('faqs').getElementsByTagName('h2');

  for (let i = 0; i < links.length; i++) {
    links[i].onclick = toggle;
  }

  links[0].firstChild.focus();

  $('toggle_dark').onclick = toggleStyleSheet;
}