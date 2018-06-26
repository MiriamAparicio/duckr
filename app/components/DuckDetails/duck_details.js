import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DuckContainer, RepliesContainer } from 'containers'
import {
  mainContainer, container, content, repliesContainer,
  replyTextAreaContainer, replyTextArea,
} from './styles.css'
import { subHeader, darkBtn, errorMsg } from 'shared_styles/styles.css'
import { formatReply } from 'helpers/utils'

Reply.propTypes = {
  submit: PropTypes.func.isRequired,
}

function Reply ({ submit }) {
  const handleSubmit = (e) => {
    if (Reply.ref.value.length === 0) return
    submit(Reply.ref.value, e)
    Reply.ref.value = ''
  }

  return (
    <div className={replyTextAreaContainer}>
      <textarea
        className={replyTextArea}
        ref={(ref) => (Reply.ref = ref)}
        maxLength={140}
        type='text'
        placeholder='Your reponse' />
      <button
        onClick={handleSubmit}
        className={darkBtn}>
        {'Submit'}
      </button>
    </div>
  )
}

class DuckDetails extends Component {
  static propTypes = {
    authedUser: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    addAndHandleReply: PropTypes.func.isRequired,
  }

  render () {
    return (
      <div className={mainContainer}>
        {this.props.isFetching === true
          ? <p className={subHeader}>{'Fetching'}</p>
          : <div className={container}>
            <div className={content}>
              <DuckContainer duckId={this.props.duckId} hideLikeCount={false} hideReplyBtn={true} />
              <Reply submit={(replyText) => this.props.addAndHandleReply(this.props.duckId, formatReply(this.props.authedUser, replyText))} />
            </div>
            <div className={repliesContainer}>
              <RepliesContainer duckId={this.props.duckId}/>
            </div>
          </div>}
        {this.props.error ? <p className={errorMsg}>{this.props.error}</p> : null}
      </div>
    )
  }
}

export default DuckDetails
