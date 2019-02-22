import React,{Component} from 'react';
import classes from './cart.css';
import books from './../../assets/books.svg';
import {Link} from 'react-router-dom';
import CartItem from './../../components/cartItem/cartItem';
import {connect} from 'react-redux';
import * as actionCreators from './../../action/index';
import emptyBag from './../../assets/emptybag.svg';
import StripeBtn from './../checkout/checkout';
import {addToCart} from './../../action/cartAction';
import store from './../../store/store';








class Cart extends Component {

  state={
    order:[]
    }

componentDidMount(){
  this.props.showcartItem(this.props.cartItems);
}

componentWillReceiveProps(props){

  this.setState({
    order:props.cartOrder.orders
  })
}




  render(){
    console.log();
    let test;
    if (this.state.order) {
      test=this.state.order.map((item,i)=>{
        return (
          <CartItem des={item.description}
          image={item.img}
          author={item.author}
          title={item.title}
          price={item.price}
          id={item._id}
          quantity={item.quantity}
          remove={()=>{this.props.removeItem(this.props.cartItems,item._id,this.props.isauth)}}
          key={i}/>
        )
      })
    }else{test=null}
    return(
      <div>
      <div className={classes.Header}>
      <div className={classes.HeaderWrapper}>
      <Link to="/" style={{ textDecoration: 'none'}}><div className={classes.CompanyName}><img src={books} alt="logo"/>
      <div className={classes.CompanyTitle}>KitabMela</div></div></Link>
      <div className={classes.ProgressBar}>
      CART ------ ADDRESS ------ PAYMENT
      </div>
      </div>
      </div>
      <div className={classes.Cart}>
       <div className={classes.Section}>
       <div className={classes.SectionWrapper}>
       {
         this.state.order?<div className={classes.PriceBox}>
         <div className={classes.PriceDetails}>Price Details</div>
         <div className={classes.TotalPrice}>Total Price: {this.props.cartOrder.totalAmount}$</div>
         <div className={classes.TotalPrice}>Discount: 0$ </div>
         <div className={classes.DividingLine}></div>
         <div className={classes.TotalAmount}>Total Amount: {this.props.cartOrder.totalAmount}$
         <div className={classes.CheckoutButton}>
         <StripeBtn amount={this.props.cartOrder.totalAmount} auth={this.props.isauth}/>
       </div>
        </div>
         </div>:
         <div className={classes.EmptyCart}>
         <div className={classes.EmptyBin}><img src={emptyBag} alt='emptyBag'/></div>
         <div className={classes.EmptyTitle}>Opps,Your cart is empty!</div>
         </div>
       }
       {
         test
       }

       </div>
       </div>
       </div>


      </div>
    );
  }
}

const mapStateToProps=state=>({
  cartItems:state.cart,
  cartOrder:state.order,
  isauth:state.auth
})

const mapDispatchToProps=dispatch=>({
  showcartItem:(cartItems)=>dispatch(actionCreators.showCart(cartItems)),
  removeItem:(cartItems,id,isauth)=>dispatch(actionCreators.removeItems(cartItems,id,isauth))

})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
