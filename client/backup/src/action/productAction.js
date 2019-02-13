import axios from 'axios';
import * as actionType from './actionType';



export const homeProducts=()=>{
  return dispatch=>{
    axios.get('/home')
          .then(products=>{
            return dispatch(allProducts(products.data));
          })
          .catch(err=>{
            console.log(err)
          });
  }
}

export const allProducts=(products)=>{
  return {
    type:actionType.HOME_PRODUCTS,
    payload:products
  }
}
