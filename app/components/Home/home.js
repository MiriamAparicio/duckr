import React, { Component } from 'react'
import { container, title, slogan } from './styles.css'

class Home extends Component {
  render () {
    return (
      <div className={container}>
        <p className={title}>{'Duckr'}</p>
        <p className={slogan}>{'The real time, cloud based, modular, scalable, growth hack, social platform. In the cloud.'}</p>
      </div>
    )
  }
}

export default Home
