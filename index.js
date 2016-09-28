import mapbox from 'mapbox-gl'

console.log('welcome to they-follow')

// L.mapbox.accessToken = 'pk.eyJ1IjoiaGlrdXJhbmdpIiwiYSI6ImNpdG04YmJwbzAwcWYyb2w0c2JoZjlidXAifQ.a_8mavHpZc852zTLsF_kSw';
// var map = L.mapbox.map('map', 'mapbox.streets')
//     .setView([40, -74.50], 9);


var map = new mapboxgl.Map({
  // container id
  container: 'map',
  // style location
  style: 'mapbox://styles/mapbox/streets-9',
  // starting position
  center: [-74.50, 40],
  zoom: 9
});
