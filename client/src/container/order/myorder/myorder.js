import React from 'react';
import classes from './myorder.css';

const Myorder=(props)=>{


let innerOrder=props.innerOrder.map((order,i)=>{
  return <div className={classes.innerOrder} key={Math.round(Math.random()*100000000)}>
  <div className={classes.CartItem}>
  <div className={classes.ItemImage}><img src={order.img} alt='product'/></div>
  <div className={classes.ItemDescription}>
  <div className={classes.ItemQuantity}>{order.title}</div>
  <div className={classes.ItemAuthor}>Author: { order.author}</div>
  <div className={classes.ItemAuthor}>Price:{order.price}$ </div>
  <div className={classes.ItemAuthor}>Qnty: {order.quantity}</div>
  </div>
  </div>
  </div>
})

  return (
    <div>
    {innerOrder}
    </div>
  );
}



export default Myorder;
