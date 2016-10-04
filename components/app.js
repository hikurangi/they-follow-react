const React = require('react')
const { Component } = require('react')
const Map = require('./map')

class App extends React.Component {
//   componentDidMount() {
//   this.props.store.dispatch(fetchItems()) // asynch action creator
// }
  render () {
    return (
      <div>
        <Map />
        <h1>They Follow</h1>
      </div>
    )
  }
}

module.exports = App
