import React,{Component} from 'react';
import classes from './header.css';
import {Link} from 'react-router-dom';
import cart from './../../assets/cart.svg';
import user from './../../assets/user.svg';
import books from './../../assets/books.svg';
import search from './../../assets/search.svg';
import {connect} from 'react-redux';
import * as actionCreators from './../../action/index';
import Categories from './categories/categories.js';


class Header extends Component {

state={
  vis:false
}

render(){
  let titleList=this.props.search.items.map((item,i)=>{
    return <li key={i} className={classes.TitleList}
    onClick={()=>{this.props.inputClick(item.id,item.title,this.props.history)}}>
    {item.title.toLowerCase()}</li>;
  })
      return(
      <div className={classes.HeaderBox}>
      <Link to="/" style={{textDecoration:"none"}}><div className={classes.CompanyName}><img src={books} alt="logo"/>
      <div className={classes.CompanyTitle}>KitabMela</div>
      </div></Link>
      <div className={classes.Navigation}>
       <nav>
        <ul>
          <li>Categories
          <div className={classes.CategoryBox} ><Categories/>
          </div></li>
          <li onClick={(e)=>{this.props.navigate(e,this.props.history)}}>New Arrivals</li>
          <li onClick={(e)=>{this.props.navigate(e,this.props.history)}}>Best Sellers</li>
          <li onClick={(e)=>{this.props.navigate(e,this.props.history)}}>Childrens</li>
        </ul>
       </nav>
      </div>
      <div className={classes.SearchBox} style={{
        backgroundColor:this.state.vis?"white":"#F5F5F6"
    }}>
      <input type="text" placeholder="Search"
      onChange={(e)=>{this.props.input(e)}}
      onFocus={(e)=>{this.setState({vis:true})}}
      onBlur={(e)=>{this.setState({vis:false})}}
      />
      <span className={classes.SearchImage}><img src={search}
      onClick={()=>{this.props.searchClick(this.props.search,this.props.history)}} alt="searh"/></span>
      {!titleList.length>0?null:
      <div className={classes.SearchContainer}>
      <ul>{titleList}</ul>
      </div>}
      </div>
      <div className={classes.User}><img src={user} alt="user"/>
        {
        this.props.isauth.isAuthenticated?<div className={classes.isAuth}>
        <div className={classes.AccountEmail}>{this.props.isauth.user.email}</div>
          <Link to='/orders' style={{textDecoration:"none"}}><div className={classes.MyOrders}>My Orders</div></Link>
          <div onClick={()=>{this.props.logout()}} className={classes.Logout}>Logout</div>
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
  isauth:state.auth,
  search:state.search
})

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actionCreators.logoutUser()),
        navigate:(e,history)=>dispatch(actionCreators.headerNav(e,history)),
        input:(e)=>dispatch(actionCreators.inputSearch(e)),
        inputClick:(id,title,history)=>dispatch(actionCreators.inputClick(id,title,history)),
        searchClick:(id,history)=>dispatch(actionCreators.inputSearchClick(id,history))

    }
};



export default connect(mapStateToProps,mapDispatchToProps)(Header);
