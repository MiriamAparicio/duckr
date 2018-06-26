import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Feed } from 'components'
import * as feedActionCreators from 'redux/modules/feed'
import { List } from 'immutable'

class FeedContainer extends Component {
  static propTypes = {
    duckIds: PropTypes.instanceOf(List),
    newDucksAvailable: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    setAndHandleFeedListener: PropTypes.func.isRequired,
    resetNewDucksAvailable: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this.props.setAndHandleFeedListener()
  }

  render () {
    return (
      <Feed
        duckIds={this.props.duckIds}
        newDucksAvailable={this.props.newDucksAvailable}
        error={this.props.error}
        isFetching={this.props.isFetching}
        resetNewDucksAvailable={this.props.resetNewDucksAvailable} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newDucksAvailable: state.feed.get('newDucksAvailable'),
    error: state.feed.get('error'),
    isFetching: state.feed.get('isFetching'),
    duckIds: state.feed.get('duckIds'),
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators(feedActionCreators, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)
