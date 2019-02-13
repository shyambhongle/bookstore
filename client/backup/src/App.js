import React, { Component } from 'react';
import {BrowserRouter,Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from './container/header/header';
import Section from './container/section/section';
import Footer from './container/footer/footer';
import Cart from './container/cart/cart';
import Register from './container/register/register';
import Login from './container/login/login';

import jwt_decode from 'jwt-decode';
import store from './store/store';

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './action/authAction';


if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
        <Route path='/cart' exact component={Cart}/>
        <Route path='/'  component={Header}/>
        </Switch>
        <Route path='/register'exact component={Register}/>
        <Route path='/login'exact component={Login}/>
        <Route path='/' exact component={Section}/>
        <Route path='/'  component={Footer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
