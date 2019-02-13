import React,{Component} from 'react';
import classes from './header.css';
import {Link} from 'react-router-dom';
import cart from './../../assets/cart.svg';
import user from './../../assets/user.svg';
import books from './../../assets/books.svg';
import search from './../../assets/search.svg';
import {connect} from 'react-redux';
import {logoutUser} from './../../action/authAction';

class Header extends Component {


render(){

      return(
      <div className={classes.HeaderBox}>
      <Link to="/" style={{textDecoration:"none"}}><div className={classes.CompanyName}><img src={books} alt="logo"/>
      <div className={classes.CompanyTitle}>KitabMela</div>
      </div></Link>
      <div className={classes.Navigation}>
       <nav>
        <ul>
          <li>CATEGORIES</li>
          <li>NEW ARRIVALS</li>
          <li>BEST SELLERS</li>
          <li>CHILDRENS</li>
        </ul>
       </nav>
      </div>
      <div className={classes.SearchBox}>
      <input type="text" placeholder="Search"/>
      <span className={classes.SearchImage}><img src={search} alt="searh"/></span>
      </div>
      <div className={classes.User}><img src={user} alt="user"/>
        {
        this.props.isauth.isAuthenticated?<div className={classes.isAuth}>
          <div className={classes.MyOrders}>My Orders</div>
          <div onClick={()=>{this.props.logoutUser()}} className={classes.Logout}>Logout</div>
          </div>:
          <div className={classes.Auth}>
          <div className={classes.AuthTitle}>Your Account</div>
          <div className={classes.AuthNextTitle}>Manage and track all your order's.</div>
          <Link to='/register' style={{textDecoration:"none"}}><button className={classes.SignupBox}>Sign Up</button></Link>
          <Link to='/login' style={{textDecoration:"none"}}><button className={classes.LoginBox}>Login</button></Link>
          </div>
        }
      </div>
      <div className={classes.Cart}><Link to="/cart"><img src={cart} alt="cart"/></Link>
      <span className={classes.CartItemsNum}>
      {this.props.cartItem.totalItems}</span>
    </div>
      </div>
    );
  }


}

const mapStateToProps=state=>({
  cartItem:state.cart,
  isauth:state.auth
})

export default connect(mapStateToProps,{logoutUser})(Header);
