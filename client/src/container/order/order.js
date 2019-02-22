import React,{Component} from 'react';
import classes from './order.css';
import {connect} from 'react-redux';
import * as actionCreators from './../../action/index';
import Myorder from './myorder/myorder';

class Order extends Component {


componentDidMount(){

  this.props.myorder();
}

componentWillReceiveProps(props){
  if (!props.auth.isAuthenticated) {
    this.props.history.push('/login');
  }
}

render(){
let orderList=this.props.order.myorders.map((outerOrder,i)=>{
  return <div className={classes.OuterOrder} key={Math.round(Math.random()*100000000)}>
  <div className={classes.OrderNumber}>Order No:{Math.round(Math.random()*100000000)}</div>
  <div className={classes.Placed}>{outerOrder.time}</div><br/>
  <div className={classes.AmountPaid}>Amount Paid: {outerOrder.totalAmount}$</div>
  <Myorder innerOrder={outerOrder.orders} key={Math.round(Math.random()*100000000)}/></div>
});
  return (
<div>
{orderList.length>0?<div>
<div className={classes.OrderTitle}>YOUR PAST ORDERS:</div>
<div className={classes.SectionBox}>
  {orderList}
</div></div>:
<div className={classes.SectionBox}><div className={classes.NoOrders}>No Past Orders</div>
</div>
}
</div>
);
}

}



const mapStateToProps=state=>({
  order:state.myorder,
  auth:state.auth
})

const mapDispatchToProps = dispatch => ({
  myorder: (order) => dispatch(actionCreators.orderAction(order))
});
export default connect(mapStateToProps,mapDispatchToProps)(Order);
