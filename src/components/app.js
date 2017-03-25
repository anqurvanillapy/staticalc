import { h, render, Component } from 'preact'

import Splash from './splash'
import Header from './header'
import Main from './main'

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        <Splash />
        <Header />
        <Main />
      </div>
    )
  }
}
