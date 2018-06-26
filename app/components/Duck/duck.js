import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatTimestamp } from 'helpers/utils'
import Reply from 'react-icons/lib/fa/mail-reply'
import Star from 'react-icons/lib/fa/star'
import {
  duckContainer, contentContainer, avatar, actionContainer,
  header, text, likeReplyContainer, icon, likedIcon, author,
} from './styles.css'
import { Map } from 'immutable'

class Duck extends Component {
  static propTypes = {
    duck: PropTypes.instanceOf(Map),
    onClick: PropTypes.func,
    isLiked: PropTypes.bool.isRequired,
    addAndHandleLike: PropTypes.func.isRequired,
    handleDeleteLike: PropTypes.func.isRequired,
    likeCount: PropTypes.number,
    hideReplyBtn: PropTypes.bool.isRequired,
    hideLikeCount: PropTypes.bool.isRequired,
    goToProfile: PropTypes.func.isRequired,
  }

  render () {
    const starIcon = this.props.isLiked === true ? likedIcon : icon
    const starFn = this.props.isLiked === true ? this.props.handleDeleteLike : this.props.addAndHandleLike
    return (
      < div
        className = {duckContainer}
        style = {{ cursor: this.props.hideReplyBtn === true ? 'default' : 'pointer' }}
        onClick = {this.props.onClick} >
        <img src={this.props.duck.get('avatar')} className={avatar} />
        <div className={contentContainer}>
          <div className={header}>
            <div onClick={this.props.goToProfile} className={author}>{this.props.duck.get('name')}</div>
            <div>{formatTimestamp(this.props.duck.get('timestamp'))}</div>
          </div>
          <div className={text}>{this.props.duck.get('text')}</div>
          <div className={likeReplyContainer}>
            {this.props.hideReplyBtn === true
              ? null
              : <Reply className={icon} />}
            <div className={actionContainer}>
              <Star className={starIcon} onClick={(e) => starFn(this.props.duck.get('duckId'), e)} />
              {this.props.hideLikeCount === true ? null : <div>{this.props.likeCount}</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Duck
