import axios from 'axios';
import * as actionType from './actionType';



export const homeProducts=()=>{
  return dispatch=>{
    axios.get('/home')
          .then(products=>{
            let limited=[];
            let featured=[];
            products.data.map(book=>{
            return book.tag==="limited"?limited.push(book):null
            })
            products.data.map(book=>{
            return book.tag==="featured"?featured.push(book):null
            })
            return dispatch(allProducts(limited,featured));
          })
          .catch(err=>{
            console.log(err)
          });
  }
}

export const allProducts=(limited,featured)=>{
  return {
    type:actionType.HOME_PRODUCTS,
    limited:limited,
    featured:featured
  }
}
