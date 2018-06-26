import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Duck } from 'components'
import * as usersLikesActions from 'redux/modules/usersLikes'

class DuckContainer extends Component {
  static propTypes = {
    duck: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
    hideLikeCount: PropTypes.bool.isRequired,
    hideReplyBtn: PropTypes.bool.isRequired,
    isLiked: PropTypes.bool.isRequired,
    likeCount: PropTypes.number,
    addAndHandleLike: PropTypes.func.isRequired,
    handleDeleteLike: PropTypes.func.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  goToProfile = (e) => {
    e.stopPropagation()
    this.context.router.history.push(`/${this.props.duck.get('uid')}`)
  }

  handleClick = (e) => {
    e.preventDefault()
    this.context.router.history.push(`/duck-detail/${this.props.duck.get('duckId')}`)
  }

  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  }
}

DuckContainer.defaultProps = {
  hideReplyBtn: false,
  hideLikeCount: true,
}

const mapStateToProps = ({ ducks, likeCount, usersLikes }, props) => ({
  duck: ducks.get(props.duckId),
  hideLikeCount: props.hideLikeCount,
  hideReplyBtn: props.hideReplyBtn,
  isLiked: usersLikes[props.duckId] === true,
  likeCount: likeCount[props.duckId],
})

const mapDispatchToProps = (dispatch) => (bindActionCreators(usersLikesActions, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(DuckContainer)
