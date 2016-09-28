import mapboxgl from 'mapbox-gl'

console.log('welcome to they-follow')

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
