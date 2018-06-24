import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal } from 'components'
import * as modalActionCreators from 'redux/modules/modal'

const mapStateToProps = (state) => {
  const duckTextLength = state.modal.duckText.length
  return {
    user: state.users[state.users.authedId] ? state.users[state.users.authedId].info : {},
    duckText: state.modal.duckText,
    isOpen: state.modal.isOpen,
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(modalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
