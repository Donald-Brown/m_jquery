'use strict'; 

let $ = function(id) {
  return document.getElementById(id);
}

window.onload = function() {
  let slidesNode = $('slides');
  let captionNode = $('caption');
  let imageNode = $('slide');

  let slides = slidesNode.getElementsByTagName('img');

  //? Start Slide Show
  let image, imageCounter = 0;

  let timer = setInterval(function() {
    imageCounter = (imageCounter + 1) % slides.length; //* could use ++imageCounter
    image = slides[imageCounter];
    imageNode.src = image.src;
    captionNode.firstChild.nodeValue = image.alt;
  }, 2000)
}