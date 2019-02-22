import React,{Component} from 'react';
import classes from './cartItem.css';

class CartItem extends Component{


render(){
  return(
    <div className={classes.SectionCart }>
    <div className={classes.CartItem}>
    <div className={classes.ItemImage}><img src={this.props.image} alt='product'/></div>
    <div className={classes.ItemDescription}>
    <div className={classes.ItemQuantity}>{this.props.title}</div>
    <div className={classes.ItemAuthor}>Author: { this.props.author}</div>
    <div className={classes.ItemAuthor}>Price:{this.props.price}$ </div>
    <div className={classes.ItemAuthor}>Qnty: {this.props.quantity}</div>
    <button className={classes.RemoveButton} onClick={this.props.remove}>REMOVE</button>
    </div>
    </div>
    </div>
  );
}
}



export default CartItem;
