import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FacebookAuthButton } from 'components'
import { centeredContainer, largeHeader, errorMsg } from 'shared_styles/styles.css'

class Authenticate extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    onAuth: PropTypes.func.isRequired,
  }
  render () {
    return (
      <div className={centeredContainer}>
        <h1 className={largeHeader}>{'Authenticate'}</h1>
        <FacebookAuthButton isFetching={this.props.isFetching} onAuth={this.props.onAuth} />
        {this.props.error ? <p className={errorMsg}>{this.props.error}</p> : null }
      </div>
    )
  }
}

export default Authenticate
