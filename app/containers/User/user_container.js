import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as usersActionCreators from 'redux/modules/users'
import * as usersDucksActionCreators from 'redux/modules/usersDucks'
import { staleDucks, staleUser } from 'helpers/utils'
import { User } from 'components'

class UserContainer extends Component {
  static propTypes = {
    noUser: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckIds: PropTypes.array.isRequired,
    fetchAndHandleUser: PropTypes.func.isRequired,
    fetchAndHandleUsersDucks: PropTypes.func.isRequired,
    lastUpdatedUser: PropTypes.number.isRequired,
    lastUpdatedDucks: PropTypes.number.isRequired,
  }

  componentDidMount () {
    const uid = this.props.match.params.uid
    if (this.props.noUser === true || staleUser(this.props.lastUpdatedUser)) {
      this.props.fetchAndHandleUser(uid)
    }

    if (this.props.noUser === true || staleDucks(this.props.lastUpdatedDucks)) {
      this.props.fetchAndHandleUsersDucks(uid)
    }
  }

  render () {
    return (
      <User
        noUser={this.props.noUser}
        isFetching={this.props.isFetching}
        name={this.props.name}
        error={this.props.error}
        duckIds={this.props.duckIds} />
    )
  }
}

function mapStateToProps ({ users, userDucks }, props) {
  const uid = props.match.params.uid
  const user = users[uid]
  const noUser = typeof user === 'undefined'
  const specificUsersDucks = userDucks[uid]

  return {
    noUser,
    isFetching: users.isFetching || userDucks.isFetching,
    error: users.error || userDucks.error,
    duckIds: specificUsersDucks ? specificUsersDucks.duckIds : [],
    lastUpdatedUser: user ? user.lastUpdated : 0,
    lastUpdatedDucks: specificUsersDucks ? specificUsersDucks.lastUpdated : 0,
    name: noUser ? '' : user.info.name,
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
  ...usersActionCreators,
  ...usersDucksActionCreators,
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
