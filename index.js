const React = require ('react')
const reactDom = require ('react-dom')
const App = require('./components/app')

reactDom.render(<App />, document.querySelector('#wrapper'))
console.log('this is index.js')

//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       locator.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }
//   function showPosition(position) {
//     locator.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
//   }
// }
