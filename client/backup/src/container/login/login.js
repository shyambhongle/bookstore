import React,{Component} from 'react';
import classes from './login.css';
import {connect} from 'react-redux';
import {loginUser} from './../../action/authAction';

class Login extends Component{

state={
  email:'',
  password:''
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
  this.props.loginUser(userCredit,this.props.history);
}

  render(){
    return(
      <div className={classes.Login}>
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
    );
  }
}


export default connect(null,{loginUser})(Login);
