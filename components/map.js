const React = require('react')
const { Component } = require('react')
// const style = require('./lib/style')
import MapGL from 'react-map-gl'
const Text = require('./text')

// then convert style as required

// require('dotenv').config()
const accessToken = 'pk.eyJ1IjoiaGlrdXJhbmdpIiwiYSI6ImNpdG1hYmI2YzAweHgyeG4wYXE5MGhmeTIifQ.L9Kkv_kbglN626HmG6ryfQ'

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      center: [0,0]
    }
  }

  // like onLoad
  componentDidMount () {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({center: [position.coords.latitude, position.coords.longitude]})
    })
    // this.setState({
    //   styles: {
    //     top: computeTopWith(this.refs.child),
    //     left: computeLeftWith(this.refs.child)
    //   }
    // })
  }

  render() {
    const { center } = this.state
    return (
      <div id="everything">
        <Text />
        < MapGL
          mapStyle='mapbox://styles/hikurangi/citmae8uk00232itjo8oqtj0l'
          width={1600}
          height={900}
          mapboxApiAccessToken={accessToken}
          latitude={center[0]}
          longitude={center[1]}
          zoom={8}>
        < /MapGL>
      </div>
    )
  }
}

module.exports = Map
