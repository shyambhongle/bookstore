import React from 'react';
import classes from './products.css';
import Product from './product/product';
import Spinner from './../spinner/Spinner';


const Products=(props)=>{

let product;

if (props.product.products) {
  product=props.product.products.map((item,i)=>{
    return <Product
            key={i}
            img={item.img}
            title={item.title}
            author={item.author}
            amount={item.price}
            id={item._id}
            />
  })
}




  return (
    <div className={classes.ProductsWrapper}>
      {product}
    </div>
  );
}


export default Products ;
