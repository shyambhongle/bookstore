import React,{Component} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import classes from './checkout.css'
import {connect} from 'react-redux';
import * as actionCreators from './../../action/index';

class stripeBtn extends Component{


    state={
      email:'',
      password:'',
      slideDown:false
    }

componentWillReceiveProps(props){
  console.log(props.auth);
  if(props.auth.isAuthenticated){
    this.setState({
      slideDown:false
    })
  }
}


    inputChangeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    }

    submitHandler=(e)=>{
      e.preventDefault();
      let userCredit={
        email:this.state.email,
        password:this.state.password
      }
      let testValidate=true;
      this.props.loginUser(userCredit,this.props.history,testValidate);
    }


    render(){
      const publishableKey = "pk_test_3QP97otEXlsFuqLbn6Z5B3kZ";
      const onToken = token => {
          const body = {
            amount: 999,
            token: token
        };
        axios
            .post("/checkout/charge", {data:body,cart:this.props.cart})
            .then(response => {
              console.log(response);
              this.props.history.push('/orders')
            })
            .catch(error => {
              console.log("Payment Error: ", error);
              alert("Payment Error");
            });
        };


        let classList=[];
        if (this.state.slideDown===false) {
          classList=[classes.Backdrop,classes.slideUp];
        }
        else {
          classList=[classes.Backdrop,classes.slideDown];
        }

  return (
    <div>
    <div className={classList.join(' ')} >
    <div className={classes.BackdropControl} onClick={()=>{this.setState({slideDown:false})}}></div>
    <div className={classes.LoginBox}>
    <div className={classes.LoginTitle}>Login</div>
    <div className={classes.FormBox}>
    <form onSubmit={this.submitHandler}>
    <input type="text" className={classes.TextInput} name="email" onChange={this.inputChangeHandler}
    placeholder='email' value={this.state.email} /><br/>
    <input type="password" className={classes.TextInput}name="password" onChange={this.inputChangeHandler}
    placeholder='password' value={this.state.password} />
    <br/>
    <button type="submit">Login</button>
    </form>
    </div>
    </div>

    </div>
    {this.props.auth.isAuthenticated?null:
      <div className={classes.CheckoutValidate} onClick={()=>{this.setState({slideDown:true})}}></div>}
    <StripeCheckout
      label="Checkout" //Component button text
      name="KitabMela" //Modal Header
      description="ebook"
      panelLabel="Checkout" //Submit button in modal
      amount={this.props.amount*100} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
      email={this.props.auth.user.email}
    />
    </div>

  );
};
}

const mapStateToProps=state=>({
  cart:state.order
})


export default connect(mapStateToProps,actionCreators)(withRouter(stripeBtn));
