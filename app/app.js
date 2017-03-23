import { h, render, Component } from 'preact'

import AppContainer from './containers/app.container'

class App extends Component {
  render () {
    return <AppContainer />
  }
}

(function () {
  render(<App />, document.getElementById('app'))
})()
