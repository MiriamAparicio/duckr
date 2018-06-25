import React, { Component } from 'react'

class Duck extends Component {
  render () {
    console.log(this.props)
    return (
      <div>{'DUCK'}</div>
    )
  }
}

export default Duck
