import React from 'react';
import classes from './nav.css';
import {connect} from 'react-redux';
import Products from './../../components/products/products.js';

const Nav=(props)=>{


  return (
    <div className={classes.SearchWrapper}>
      <div className={classes.ContentWrapper}>
      <div className={classes.SearchTitle}>{props.match.title.toUpperCase()}</div>
      <div className={classes.ProductBox}>
      <Products product={props.match.products}/>
      </div>
      </div>
    </div>
  );
}



const mapStateToProps=state=>({
  match:state.search
})

export default connect(mapStateToProps)(Nav);
