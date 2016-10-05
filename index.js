const React = require ('react')
const reactDom = require ('react-dom')
const App = require('./components/app')

reactDom.render(<App />, document.querySelector('#reactContainer'))
console.log('this is index.js')
