import { h, render, Component } from 'preact'
import { Link } from 'preact-router'

const styles = {
  header: {
    background: '#ececec',
    paddingBottom: '.6em'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItem: 'center',
    background: '#fff'
  },
  navItem: {
    height: '4em',
    padding: '1em 0',
    flex: '1',
    color: '#333',
    textAlign: 'center',
    textDecoration: 'none',
    borderLeft: '1px solid #eee',
    borderRight: '1px solid #eee',
    borderRadius: '2px'
  }
}

export default class Header extends Component {
  render () {
    return (
      <header style={styles.header}>
        <nav style={styles.nav}>
          <NavItem route='/' usrtype='干事' />
          <NavItem route='/' usrtype='部长' />
          <NavItem route='/' usrtype='行政部' />
        </nav>
      </header>
    )
  }
}

class NavItem extends Component {
  render () {
    return (
      <Link className='navitem' style={styles.navItem} href={this.props.route}>
        {this.props.usrtype}
      </Link>
    )
  }
}
