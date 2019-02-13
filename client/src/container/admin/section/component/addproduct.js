import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addProduct} from './../../../../action/adminAction';
import classes from './addproduct.css';

class AddProduct extends Component {

state={
  title:'',
  author:'',
  price:'',
  description:'',
  img:null,
  category:'',
  tag:''
}


changeHandler=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}

imageHandle=(e)=>{
  this.setState({
    img: e.target.files[0]
  })  }


submitHandler=(e)=>{
  e.preventDefault();
  const data = new FormData()
  data.append('img', this.state.img)
  data.append('title', this.state.title);
  data.append('author', this.state.author);
  data.append('description', this.state.description);
  data.append('tag', this.state.tag);
  data.append('category', this.state.category);
  data.append('price', this.state.price);

  this.props.addProduct(data);

}

render(){

  return(
  <div className={classes.AddProduct}>
  <div className={classes.DivTitle}>Add New Book</div>
  <form onSubmit={this.submitHandler} className={classes.FormBox}>
  <input type='text' name="title"  onChange={this.changeHandler} placeholder="Book title"
  value={this.state.title}/><br/>
  <input type='text' name="author" onChange={this.changeHandler} placeholder="author"
  value={this.state.author}/><br/>
  <input type='text' name="price" onChange={this.changeHandler} placeholder="price"
  value={this.state.price}/><br/>
  <input type='text' name="category" onChange={this.changeHandler} placeholder="category"
  value={this.state.category}/><br/>
  <input type='text' name="tag" onChange={this.changeHandler} placeholder="tag"
  value={this.state.tag}/><br/>
  <input type='text' name="description" onChange={this.changeHandler} placeholder="description"
  value={this.state.description}/><br/>
  <label>Image<input type='file' name="img" onChange={this.imageHandle} /><br/></label>
  <button type="submit">submit</button>
  </form>
  </div>
  );
}
}


export default connect(null,{addProduct})(AddProduct);
