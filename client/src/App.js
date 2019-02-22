import React, { Component } from 'react';
import {BrowserRouter,Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from './container/header/header';
import Section from './container/section/section';
import Footer from './container/footer/footer';
import Cart from './container/cart/cart';
import Register from './container/register/register';
import Login from './container/login/login';
import {connect} from 'react-redux';
import Admin from './container/admin/admin';
import SearchProduct from './container/search/search.js';
import Order from './container/order/order.js';
import Nav from './container/nav/nav';
import * as actionCreators from './action/index';
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
if (decoded.admin) {
  store.dispatch({type:"ADMIN",payload:true})
  store.dispatch(setCurrentUser(decoded));

}else {
  store.dispatch(setCurrentUser(decoded));

}

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/';
  }
}


class App extends Component {

test1=true;
test2=true;


componentDidMount(){
  if (localStorage.localcart && localStorage.localcart.length>0) {
    let localstore=JSON.parse(localStorage.getItem('localcart'));
    if (localstore.length>0) {
      localstore.map(item=>{
        return this.props.addItem(item);
      })
    }
}
}





  render() {

    return (
      <BrowserRouter>
      {!this.props.isadmin?<div>
      <Switch>
      <Route path='/cart' exact component={Cart}/>
      <Route path='/'  component={Header}/>
      </Switch>
      <Route path='/orders' exact component={Order}/>
      <Route path='/search' exact component={SearchProduct}/>
      <Route path='/navigation' exact component={Nav}/>
      <Route path='/register'exact component={Register}/>
      <Route path='/login'exact component={Login}/>
      <Route path='/' exact component={Section}/>
      <Route path='/'  component={Footer}/>
      </div>:<div>
      <Admin/>
      </div>}
      </BrowserRouter>
    );
  }
}


const mapStateToProps=state=>({
  isadmin:state.admin.admin,
  auth:state.auth
})

const mapDispatchToProps=dispatch=>({
  addcart:()=>{dispatch(actionCreators.authAddCart())},
  removecart:()=>{dispatch(actionCreators.removeAuthCart())},
  addItem:(payload)=>{dispatch(actionCreators.addToCart(payload))}

})



export default connect(mapStateToProps,mapDispatchToProps)(App);
