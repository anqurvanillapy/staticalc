import { h, render, Component } from 'preact'

const styles = {
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center'
  },
  title: {
    margin: '0',
    fontSize: '4.5em',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'courier, monospace'
  },
  subtitle: {
    marginTop: '0',
    color: '#666',
    fontWeight: '200',
    textAlign: 'center'
  }
}

export default class Splash extends Component {
  constructor (props) {
    super(props)
    this.state = {active: 'active'}
  }

  componentDidMount () {
    setTimeout(_ => { this.setState({active: ''}) }, 1000)
  }

  render () {
    return (
      <div className={`overlay ${this.state.active}`} style={styles.overlay}>
        <h1 style={styles.title}>TGWPA</h1>
        <h2 style={styles.subtitle}>绩效考核 | 团工委</h2>
      </div>
    )
  }
}
