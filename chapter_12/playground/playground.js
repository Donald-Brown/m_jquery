// const fetchData = function() {
//   // let url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=waterfall,yosemite";

//   // let url = "https://api.nasa.gov/planetary/apod?api_key=o1LBKnqER92QVjhPHCQrO0kQgpOdiCGdcKPSQq3r";

//   const url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=waterfall,yosemite";

//   fetch(url)
//             // .then((res) => res.set('Access-Control-Allow-Origin', '*')) 
//             // .then((data) => console.log(data));

//   function display(data) {
//     return JSON.parse(data);
//   }
// }

// window.onload = function() {
//   fetchData();
// }

$(function() {
  const url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=waterfall,yosemite'";
  $.getJSON(url, function(data) {
    console.log(data);
  });
});