import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { container, navContainer, link } from './styles.css'
import { ModalContainer } from 'containers'

// Do this two functional components better be in two different files?
function NavLinks ({ isAuthed }) {
  return isAuthed === true
    ? <ul>
      <li><Link className={link} to='/feed'>{'Home'}</Link></li>
    </ul>
    : null
}

function ActionLinks ({ isAuthed }) {
  return isAuthed === true
    ? <ul>
      <li><ModalContainer /></li>
      <li><Link className={link} to='/logout'>{'Logout'}</Link></li>
    </ul>
    : <ul>
      <li><Link className={link} to='/'>{'Home'}</Link></li>
      <li><Link className={link} to='/auth'>{'Login'}</Link></li>
    </ul>
}

class Navigation extends Component {
  static propTypes = NavLinks.propTypes = ActionLinks.propTypes = {
    isAuthed: PropTypes.bool.isRequired,
  }
  render () {
    return (
      <div className={container}>
        <nav className={navContainer}>
          <NavLinks isAuthed={this.props.isAuthed} />
          <ActionLinks isAuthed={this.props.isAuthed} />
        </nav>
      </div>
    )
  }
}

export default Navigation
