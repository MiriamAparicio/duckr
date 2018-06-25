import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { newDuckContainer, header } from './styles.css'
import { DuckContainer } from 'containers'
import { errorMsg } from 'shared_styles/styles.css'

const NewDucksAvailable = ({ handleClick }) => {
  return (
    <div className={newDuckContainer} onClick={handleClick}>
      {'New Ducks Available'}
    </div>
  )
}

class Feed extends Component {
  static proptypes = {
    duckIds: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    newDucksAvailable: PropTypes.bool.isRequired,
    resetNewDucksAvailable: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  }

  render () {
    return this.props.isFetching === true ? <h1 className={header}>{'Fetching'}</h1>
      : <div>
        {this.props.newDucksAvailable ? <NewDucksAvailable handleClick={this.props.resetNewDucksAvailable} /> : null}
        {this.props.duckIds.length === 0
          ? <p className={header}>{'This is unfortunate.'} <br /> {'It appears there are no ducks yet 😞'}</p>
          : null}
        {this.props.duckIds.map((id) => (
          <DuckContainer
            duckId={id}
            key={id} />
        ))}
        {this.props.error ? <p className={errorMsg}>{this.props.error}</p> : null}
      </div>
  }
}

export default Feed
