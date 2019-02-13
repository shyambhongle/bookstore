import React from 'react';
import classes from './cartItem.css';

const CartItem=(props)=>{
  return(
    <div className={classes.SectionCart }>
    <div className={classes.CartItem}>
    <div className={classes.ItemImage}><img src={props.image} alt='product'/></div>
    <div className={classes.ItemDescription}>
    <div className={classes.ItemTitle}>{props.title}</div>
    <div className={classes.ItemAuthor}>Author: { props.author}</div>
    <div className={classes.ItemQuantity}>Quantity:</div>
    <div className={classes.ItemPrice}>Price: { props.price}$</div>
    </div>
    </div>
    </div>
  );
}





export default CartItem;
