import React,{Component} from 'react';
import classes from './cart.css';
import books from './../../assets/books.svg';
import {Link} from 'react-router-dom';
import CartItem from './../../components/cartItem/cartItem';
import {connect} from 'react-redux';
import {showCart} from './../../action/cartAction';
import emptyBag from './../../assets/emptybag.svg';

class Cart extends Component {

  state={
    order:null
  }

componentDidMount(){
  this.props.showCart(this.props.cartItems);
}

componentWillReceiveProps(pro){
  this.setState({
    order:pro.cartOrder.orders
  })
}


  render(){
    let test;
    if (this.state.order) {
      test=this.state.order.map((item,i)=>{
        return (
          <CartItem des={item.description}
          image={item.img}
          author={item.author}
          title={item.title}
          price={item.price}
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
         <div className={classes.TotalPrice}>Total Price: </div>
         <div className={classes.TotalPrice}>Discount: </div>
         <div className={classes.DividingLine}></div>
         <div className={classes.TotalAmount}>Total Amount: </div>
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
  cartOrder:state.order
})

export default connect(mapStateToProps,{showCart})(Cart);
