import React from 'react';
import classes from './search.css';
import {connect} from 'react-redux';
import Products from './../../components/products/products.js';

const SearchProduct=(props)=>{


  return (
    <div className={classes.SearchWrapper}>
      <div className={classes.ContentWrapper}>
      <div className={classes.SearchTitle}>Matching Products for "{props.match.title}"</div>
      <div className={classes.ProductBox}>
      {
        props.match.products.length!==0?<Products product={props.match.products}/>
        :<div className={classes.NoMatch}>No products to display</div>

      }
      </div>
      </div>
    </div>
  );
}



const mapStateToProps=state=>({
  match:state.search
})

export default connect(mapStateToProps)(SearchProduct);
