import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as duckActionCreators from 'redux/modules/ducks'
import * as likeCountActionCreators from 'redux/modules/likeCount'
import * as repliesActionCreators from 'redux/modules/replies'
import { DuckDetails } from 'components'

class DuckDetailsContainer extends Component {
  static propTypes = {
    authedUser: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckAlreadyFetched: PropTypes.bool.isRequired,
    removeFetching: PropTypes.func.isRequired,
    fetchAndHandleDuck: PropTypes.func.isRequired,
    initLikeFetch: PropTypes.func.isRequired,
    addAndHandleReply: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this.props.initLikeFetch(this.props.duckId)
    if (this.props.duckAlreadyFetched === false) {
      this.props.fetchAndHandleDuck(this.props.duckId)
    } else {
      this.props.removeFetching()
    }
  }

  render () {
    return (
      <DuckDetails
        authedUser={this.props.authedUser}
        duckId={this.props.duckId}
        isFetching={this.props.isFetching}
        error={this.props.error}
        addAndHandleReply={this.props.addAndHandleReply}/>
    )
  }
}

const mapStateToProps = (state, props) => ({
  duckId: props.match.params.duckId,
  authedUser: state.users[state.users.authedId].info,
  isFetching: state.ducks.get('isFetching') || state.likeCount.isFetching,
  error: state.ducks.get('error'),
  duckAlreadyFetched: !!state.ducks.get(props.match.params.duckId),
})

const mapDispatchToProps = (dispatch) => (bindActionCreators({
  ...duckActionCreators,
  ...likeCountActionCreators,
  ...repliesActionCreators,
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(DuckDetailsContainer)
