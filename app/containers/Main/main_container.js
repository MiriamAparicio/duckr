import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import * as userActionCreators from 'redux/modules/users'
import * as usersLikesActionCreators from 'redux/modules/usersLikes'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'

class MainContainer extends Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
    children: PropTypes.any,
    isFetching: PropTypes.bool.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
    authUser: PropTypes.func.isRequired,
    removeFetchingUser: PropTypes.func.isRequired,
    setUsersLikes: PropTypes.func.isRequired,
  }

 static contextTypes = {
   router: PropTypes.object.isRequired,
 }

 componentDidMount () {
   firebaseAuth().onAuthStateChanged((user) => {
     if (user) {
       const userData = user.providerData[0]
       const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
       this.props.authUser(user.uid)
       this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
       this.props.setUsersLikes()
       if (this.props.location.pathname === '/feed') {
         this.context.router.history.replace('feed')
       }
     } else {
       this.props.removeFetchingUser()
     }
   })
 }

 render () {
   return this.props.isFetching === true
     ? null
     : <div className={container}>
       <Navigation isAuthed={this.props.isAuthed} />
       <div className={innerContainer}>
         {this.props.children}
       </div>
     </div>
 }
}

const mapStateToProps = ({users}) => ({
  isAuthed: users.isAuthed,
  isFetching: users.isFetching,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({...userActionCreators, ...usersLikesActionCreators}, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContainer))
