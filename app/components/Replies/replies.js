import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  avatar, replyContainer,
  cushion, center, author,
} from './styles.css'
import { formatTimestamp } from 'helpers/utils'
import { errorMsg, subHeader } from 'shared_styles/styles.css'

function Reply ({ comment }) {
  return (
    <div className={replyContainer}>
      <img src={comment.avatar} alt={comment.name} className={avatar} />
      <div>
        <div className={author}>{comment.name}</div>
        <div className={cushion}>{formatTimestamp(comment.timestamp)}</div>
        <div className={cushion}>{comment.reply}</div>
      </div>
    </div>
  )
}

class Replies extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    replies: PropTypes.object,
  }

  render () {
    return (
      <div>
        {this.props.error &&
          <p className={errorMsg}>{this.props.error}</p>}
        {this.props.isFetching === true
          ? <p className={subHeader}>{'Fetching Replies'}</p>
          : <div>
            <h1 className={subHeader}>{'Replies'}</h1>
            {Object.keys(this.props.replies).map((replyId) => (<Reply key={replyId} comment={this.props.replies[replyId]} />))}
          </div>}
        {this.props.replies && Object.keys(this.props.replies).length === 0 &&
          <h3 className={center}>{'Be the first to comment. 😎'}</h3>}
      </div>
    )
  }
}

export default Replies
