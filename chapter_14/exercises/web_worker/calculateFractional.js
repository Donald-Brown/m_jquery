onmessage = function(e) {
  let factorial = 1;
  for ( let i = e.data; i > 1; i--) {
    factorial = factorial * i;
  }
  postMessage(factorial);
}