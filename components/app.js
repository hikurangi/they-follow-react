const React = require('react')
const { Component } = require('react')
const Map = require('./map')
// const document = require('global/document')
// const window = require('global/window')
// import autobind from 'autobind-decorator'
class App extends React.Component {
//   componentDidMount() {
//   this.props.store.dispatch(fetchItems()) // asynch action creator
// }
  constructor(props) {
    super(props)
    window.addEventListener('resize', this._onWindowResize)
    this.state = {width: window.innerWidth}
  }

  // @autobind _onWindowResize() {
  // this.setState({width: window.innerWidth});
  // }

  render () {
    return (
      <Map />
    )
  }
}

module.exports = App
