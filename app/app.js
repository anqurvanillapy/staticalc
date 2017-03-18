import { Component } from 'react'
import ReactDom from 'react-dom'

import AppContainer from './containers/app.container'

class App extends Component {
  rende () {
    return (
      <AppContainer />
    )
  }
}

(function () {
  ReactDom.render(<App />, document.getElementById('app'))
})()
