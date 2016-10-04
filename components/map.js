const React = require('react')
const { Component } = require('react')
import MapGL from 'react-map-gl'

// require('dotenv').config()
const accessToken = 'pk.eyJ1IjoiaGlrdXJhbmdpIiwiYSI6ImNpdG1hYmI2YzAweHgyeG4wYXE5MGhmeTIifQ.L9Kkv_kbglN626HmG6ryfQ'

class Map extends React.Component {
  // render () {
    // mapboxgl.accessToken = 'pk.eyJ1IjoiaGlrdXJhbmdpIiwiYSI6ImNpdG1hYmI2YzAweHgyeG4wYXE5MGhmeTIifQ.L9Kkv_kbglN626HmG6ryfQ'
    // var map = new mapboxgl.Map({
    //   // container id
    //   container: 'map',
    //   // style location
    //   style: 'mapbox://styles/hikurangi/citmae8uk00232itjo8oqtj0l',
    //   // starting position - need to change this to user's current position
    //   center: [-74.50, 40],
    //   zoom: 9
    // })
  // }
  constructor(props) {
    super(props)
    this.state = {
      center: [0,0]
    }
  }

  // like onLoad
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('position', position);
      // const initialState = {
      //   center: [position.coords.latitude, position.coords.longitude]
      // // }
      // console.log('initialState', initialState)
      this.setState({center: [position.coords.latitude, position.coords.longitude]});
    })
  }

  render() {
    const { center } = this.state
    return (
      <MapGL
        // style='mapbox://styles/hikurangi/citmae8uk00232itjo8oqtj0l'
        width={800}
        height={600}
        mapboxApiAccessToken={accessToken}
        latitude={center[0]}
        longitude={center[1]}
        zoom={8}>
      < /MapGL>
    )
  }
}

module.exports = Map
