import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import User from '../User'
import Home from '../../pages/Home'


const Layout = () => {
  const currentUser = useSelector(state => state.user.currentUser.profile)
  User();
  console.log(currentUser)
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
