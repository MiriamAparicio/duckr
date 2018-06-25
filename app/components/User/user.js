import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DuckContainer } from 'containers'
import { userContainer, header } from './styles.css'
import { errorMsg } from 'shared_styles/styles.css'

class User extends Component {
  static propTypes = {
    noUser: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckIds: PropTypes.array.isRequired,
  }
  render () {
    return this.props.noUser === true
      ? <p className={header}>{'This user doesnt exist. 👽'}</p>
      : <div>
        {this.props.isFetching === true
          ? <p className={header}>{'Loading'}</p>
          : <div>
            <div className={userContainer}>
              <div>{this.props.name}</div>
            </div>
            {this.props.duckIds.map((id) => {
              return <DuckContainer
                duckId={id}
                key={id} />
            })}
            {this.props.duckIds.length === 0
              ? <p className={header}>
                {`It looks like ${this.props.name.split(' ')[0]} hasn't made any ducks yet.`}
              </p>
              : null}
          </div>}
        {this.props.error ? <p className={errorMsg}>{this.props.error}</p> : null}
      </div>
  }
}

export default User
