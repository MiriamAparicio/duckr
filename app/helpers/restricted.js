import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { checkIfAuthed } from './auth'

export default (BaseComponent, store) => {
  class Restricted extends Component {
    static propTypes = {
      location: PropTypes.any,
    }

    UNSAFE_componentWillMount () {
      this.checkAuthentication(this.props)
    }

    UNSAFE_componentWillReceiveProps (nextProps) {
      if (nextProps.location !== this.props.location) {
        this.checkAuthentication(nextProps)
      }
    }

    checkAuthentication (props) {
      const { history } = props
      const nextPathName = history.location.pathname
      const isAuthed = checkIfAuthed(store)
      if (nextPathName === '/' || nextPathName === '/auth') {
        if (isAuthed === true) {
          history.replace({ pathname: '/feed' })
          console.log('auth')
        }
      } else {
        if (isAuthed !== true) {
          history.replace({ pathname: '/auth' })
          console.log('NO_auth')
        }
      }
    }

    render () {
      return <BaseComponent {...this.props} />
    }
  }
  return withRouter(Restricted)
}
