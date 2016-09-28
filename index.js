import mapboxgl from 'mapbox-gl'
var fs = require('fs');
require('dotenv').config()

console.log('welcome to they-follow')

// var locator = document.getElementById("locator");
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         locator.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// function showPosition(position) {
//     locator.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
// }

// mapboxgl.accessToken = process.env.MAPBOX_GL_KEY
mapboxgl.accessToken = 'pk.eyJ1IjoiaGlrdXJhbmdpIiwiYSI6ImNpdG1hYmI2YzAweHgyeG4wYXE5MGhmeTIifQ.L9Kkv_kbglN626HmG6ryfQ'
var map = new mapboxgl.Map({
  // container id
  container: 'map',
  // style location
  style: 'mapbox://styles/hikurangi/citmae8uk00232itjo8oqtj0l',
  // starting position
  center: [-74.50, 40],
  zoom: 9
});
