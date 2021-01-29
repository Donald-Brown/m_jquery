let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let result = xhr.responseText;
    let object = JSON.parse(result);
    postMessage(object);
  }
}
xhr.open("GET", "data/books.json", true);
xhr.send('');