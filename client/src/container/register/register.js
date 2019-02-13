import React,{Component} from 'react';
import classes from './register.css';
import {registerUser} from './../../action/authAction';
import {connect} from 'react-redux';

class Register extends Component{

state={
  email:'',
  password:'',
  gender:''
}

inputChangeHandler=(e)=>{
this.setState({
  [e.target.name]:e.target.value
})
}

submitHandler=(e)=>{
  e.preventDefault();
  let userDetails={
    email:this.state.email,
    password:this.state.password,
    gender:this.state.gender
  }
  this.props.registerUser(userDetails,this.props.history);
}

  render(){
    return(
      <div className={classes.Register}>
      <div className={classes.RegisterBox}>
      <div className={classes.RegisterTitle}>Create an account</div>
      <div className={classes.FormBox}>
      <form onSubmit={this.submitHandler}>
      <input type="text" className={classes.TextInput} name="email" onChange={this.inputChangeHandler}
      placeholder='email' value={this.state.email} /><br/>
      <input type="password" className={classes.TextInput}name="password" onChange={this.inputChangeHandler}
      placeholder='password' value={this.state.password} /><br/>
      <div className={classes.Gender}>
      <label>
      <input type="radio" name='gender' onChange={this.inputChangeHandler} value="male" />
      Male</label>
      <label >
      <input type="radio" name="gender" onChange={this.inputChangeHandler} value="female"/>
      Female</label>
      </div>

      <br/>
      <button type="submit">Register</button>
      </form>
      </div>
      </div>
      </div>
    );
  }
}


export default connect(null,{registerUser})(Register);
