import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from '../User'
import { Home } from '../../pages/Home'


const Layout = () => {
  User();
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>
        </Switch>
      </Router>
    </>
  )
}

export default Layout
