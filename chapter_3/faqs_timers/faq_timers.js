let $ = function(id) {
  return document.getElementById(id);
}

//? the toggle event handler
let toggle = function() {
  let h2 = this; //? the clicked h2 tag
  let div = h2.nextElementSibling;

  //? toggle plus and minus sign
  if (h2.hasAttribute('class')) {
    h2.removeAttribute('class');
  } else {
    h2.setAttribute('class', 'minus');
  }

  //? toggle div visiblity
  if (div.hasAttribute('class')) {
    div.removeAttribute('class');
  } else {
    div.setAttribute('class', 'open');
  }
}

//* Timer functions
//? one time timer
let hideMessage = function() {
  $('startup_message').setAttribute('class', 'closed');
}

//? interval timer
let counter = 0;
let updateCounter = function() {
  counter++;
  $('counter').firstChild.nodeValue = counter;
}

// //? stopTimer
// let stopTimer = function() {
//   clearInterval(timer2);
// }

window.onload = function() {
  //? get h2 tags 
  let h2s = $('faqs').getElementsByTagName('h2');

  //? attach event handler to h2 tags
  for (let i = 0; i < h2s.length; i++) {
    h2s[i].onclick = toggle;
  }

  //? set focus
  h2s[0].focus();

  //? call timer
  let timer1 = setTimeout(function() {
    hideMessage();
    // clearTimeout(timer1);
  }, 5000);

  let timer2 = setInterval(updateCounter, 1000);

  //? stop timer event listener
  $('stop_timer').onclick = function() {
    clearInterval(timer2);
  };

  $('restart_counter').onclick = function() {
    timer2 = setInterval(updateCounter, 1000)
  }
}