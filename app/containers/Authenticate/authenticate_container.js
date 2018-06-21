import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends Component {
  static propTypes = {
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  handleAuth = (e) => {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => {
        this.context.router.history.replace('feed')
      })
  }

  render () {
    return (
      <Authenticate
        isFeching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  }
}

const mapStateToProps = state => ({
  isFeching: state.isFeching,
  error: state.error,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(userActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
