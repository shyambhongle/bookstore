import React,{Component} from 'react';
import classes from './section.css';
import {connect} from 'react-redux';
import {addProduct} from './../../../action/adminAction';
import {Route,NavLink} from 'react-router-dom';
import AddProduct from './component/addproduct';

class Section extends Component {


changeInput=()=>{
  let test="sdf";
  this.props.addProduct(test);
}

render(){

  return(
    <div className={classes.Section}>
    <div className={classes.ControlPanel}>
    <div className={classes.Controls}><NavLink to="/product"
    style={{textDecoration:"none"}} className={classes.visited}  activeStyle={{color: "white"}}>Add Product</NavLink></div>
    <div className={classes.Controls}>Banner</div>
    </div>
    <div className={classes.DisplayPannel}>
      <Route path='/product'  component={AddProduct}/>
    </div>

    </div>
  );
}

}



export default connect(null,{addProduct})(Section);
