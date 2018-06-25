import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { default as ReactModal } from 'react-modal'
import {
  newDuckTop, pointer, newDuckInputContainer,
  newDuckInput, submitDuckBtn, darkBtn,
} from './styles.css'
import { formatDuck } from '../../helpers/utils'

const modalStyles = {
  content: {
    width: 350,
    margin: '0px auto',
    height: 220,
    borderRadius: 5,
    background: '#ebebeb',
    padding: 0,
  },
}

class Modal extends Component {
  static propTypes = {
    duckText: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    isSubmitDisabled: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    updateDuckText: PropTypes.func.isRequired,
    duckFanout: PropTypes.func.isRequired,
  }

  submitDuck = () => {
    console.log('Duck', this.props.duckText)
    console.log('User', this.props.user)
    this.props.duckFanout(formatDuck(this.props.duckText, this.props.user))
  }

  render () {
    return (
      <span className={darkBtn} onClick={this.props.openModal}>
        {'Duck'}
        <ReactModal style={modalStyles} isOpen={this.props.isOpen} onRequestClose={this.props.closeModal}
          contentLabel='Modal'>
          <div className={newDuckTop}>
            <span>{'Compose new Duck'}</span>
            <span onClick={this.props.closeModal} className={pointer}>{'X'}</span>
          </div>
          <div className={newDuckInputContainer}>
            <textarea
              onChange={(e) => this.props.updateDuckText(e.target.value)}
              value={this.props.duckText}
              maxLength={140}
              type='text'
              className={newDuckInput}
              placeholder="What's on your mind?" />
          </div>
          <button
            className={submitDuckBtn}
            disabled={this.props.isSubmitDisabled}
            onClick={this.submitDuck}>
            {'Duck'}
          </button>
        </ReactModal>
      </span>
    )
  }
}

export default Modal
