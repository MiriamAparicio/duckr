import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { button } from './styles.css'

class FacebookAuthButton extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    onAuth: PropTypes.func.isRequired,
  }
  render () {
    return (
      <button onClick={this.props.onAuth} className={button}>
        {this.props.isFetching === true
          ? 'Loading'
          : 'Login with Facebook'}
      </button>
    )
  }
}

export default FacebookAuthButton
