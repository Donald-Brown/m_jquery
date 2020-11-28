'use strict';

let $ = function(id) {
  return document.getElementById(id);
}

let swap = function(e) {
  let link = this;
  let captionNode = $('caption');
  let imageNode = $('image')

  imageNode.src = link.getAttribute('href');
  captionNode.firstChild.nodeValue = link.getAttribute('title');

  if (!e) {
    evt = window.event;
  }
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

window.onload = function() {
  let listNode = $('image_list');
  let imageLinks = listNode.getElementsByTagName('a');

  // let linkNode, image
  for (let i = 0; i < imageLinks.length; i++) {
    let linkNode = imageLinks[i];
    linkNode.onclick = swap;

    let image = new Image();
    image.src = linkNode.getAttribute('href');
  }

  imageLinks[0].focus();
}