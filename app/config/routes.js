import React from 'react'
// needed to chage some parts of the code as react-router documentation is outdated
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'

const routes = (
  <Router>
    <MainContainer>
      <Route exact={true} path='/' component={HomeContainer} />
      <Route exact={true} path='/auth' component={AuthenticateContainer} />
      <Route exact={true} path='/feed' component={FeedContainer} />
    </MainContainer>
  </Router>
)

export default routes
