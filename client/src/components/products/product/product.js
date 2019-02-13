import React from 'react';
import classes from './product.css';
import {connect} from 'react-redux';
import {addToCart} from './../../../action/cartAction';

const Product =(props)=>{

let payload={
  id:props.id,
  isauth:props.isauth.isAuthenticated
}

if (props.loading) {
  console.log("loading was true");
}

  return(
    <div className={classes.Product}>
    <img src={props.img} alt="products"/>
    <div className={classes.PriceTag}>Price {props.amount}$</div>
    <div className={classes.DetailSlide}>
    <div className={classes.Title}>"{props.title}"</div>
    <div className={classes.Author}>Author:  {props.author}</div>
    <div className={classes.Author}>Price: {props.amount}$</div>
    <button className={classes.CartButton} onClick={()=>{props.addToCart(payload)}}>Add To Cart</button>
    </div>
    </div>
  );
}

const mapStateToProps=state=>({
  isauth:state.auth
})

export default connect(mapStateToProps,{addToCart})(Product);
