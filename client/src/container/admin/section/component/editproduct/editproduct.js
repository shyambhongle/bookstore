import React,{Component} from 'react';
import classes from './editproduct.css';
import {connect} from 'react-redux';
import * as actionCreators from './../../../../../action/index';



class EditProduct extends Component {


  state={
    title:'',
    author:'',
    price:'',
    description:'',
    img:null,
    category:'',
    tag:'',
    vis:false
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
    let data={
      title:this.state.title,
      author:this.state.author,
      price:this.state.price,
      description:this.state.description,
      category:this.state.category,
      tag:this.state.tag,
      id:this.props.search.products[0]._id
    }
    this.props.update(data);
  }



componentWillReceiveProps(props){
  if (props.search.products.length>0) {
      let myproduct=props.search.products[0];

    this.setState({
      title:myproduct.title,
      author:myproduct.author,
      price:myproduct.price,
      description:myproduct.description,
      img:myproduct.img,
      category:myproduct.category.join(','),
      tag:myproduct.tag,
    })
  }
}





render(){


  let titleList=this.props.search.items.map((item,i)=>{
    return <li key={i} className={classes.TitleList}
    onClick={()=>{this.props.inputClick(item.id,item.title,this.props.history)}}>
    {item.title.toLowerCase()}</li>;
  })




  return (
    <div className={classes.EditBox}>
    <div className={classes.SearchProduct}>

    <div className={classes.SearchBox} style={{
      backgroundColor:this.state.vis?"white":"#F5F5F6"
  }}>
    <input type="text" placeholder="Search by title"
    onChange={(e)=>{this.props.input(e)}}
    onFocus={(e)=>{this.setState({vis:true})}}
    onBlur={(e)=>{this.setState({vis:false})}}
    />

    {!titleList.length>0?null:
    <div className={classes.SearchContainer}>
    <ul>{titleList}</ul>
    </div>}
    </div>
    </div>


{this.props.search.products.length>0?   <div><div className={classes.ProdutDetail}>
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
    <textarea rows="3" cols="50"  type='text' name="description" onChange={this.changeHandler} placeholder="description"
    value={this.state.description}/><br/>
    <button type="submit">Save</button>
    </form>
    </div>
    <div className={classes.ImageContainer}><img src={this.state.img} alt="ProductImage"/></div></div>:null}


    </div>
  );
}

}



const mapStateToProps=state=>({
  cartItem:state.cart,
  isauth:state.auth,
  search:state.search
})

const mapDispatchToProps = dispatch => {
    return {
        input:(e)=>dispatch(actionCreators.inputSearch(e)),
        inputClick:(id,title,history)=>dispatch(actionCreators.inputClick(id,title,history)),
        update:(productDetails,id)=>dispatch(actionCreators.updateProduct(productDetails,id))
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(EditProduct);
