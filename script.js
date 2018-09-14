var map1;
var map2;
function initMap() {
  map1 = new google.maps.Map(document.getElementById('map1'), {
    center: {lat: 47.6097, lng: -122.3331},
    zoom: 8
    });
  map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {lat: 47.6097, lng: -122.3331},
    zoom: 8
  })
}


//insert KMZ layer here
// var kmlLayer = new google.maps.KmlLayer({
// url: 'https://sites.google.com/site/258files/1/TestLayer.kmz ',
// preserveViewport: true,
// map1: map
// })
