import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'

class MainContainer extends Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
  }

  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   isAuthed: state.isAuthed,
// })

// export default connect(mapStateToProps)(MainContainer)
// export default MainContainer

export default connect(
  (state) => ({ isAuthed: state.isAuthed })
)(MainContainer)
