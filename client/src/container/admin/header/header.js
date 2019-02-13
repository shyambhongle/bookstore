import React,{Component} from 'react';
import classes from './header.css';
import books from './../../../assets/books.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from './../../../action/authAction';


class Header extends Component{

render(){
  return(
    <div className={classes.Header}>
    <div className={classes.HeaderWrapper}>
    <Link to="/" style={{ textDecoration: 'none'}}><div className={classes.CompanyName}><img src={books} alt="logo"/>
    <div className={classes.CompanyTitle}>KitabMela</div></div></Link>
    <div className={classes.ProgressBar}>
    Admin Dashboard
    </div>
    <Link to='/'><button onClick={()=>{this.props.logoutUser(true)}}>Logout</button></Link>
    </div>
    </div>
  );
}
}





export default connect(null,{logoutUser})(Header);
