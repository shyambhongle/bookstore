import * as actionType from './actionType';
import axios from 'axios';

export const addToCart=(payload)=>{
  return dispatch=>{

      return dispatch(cartItems(payload));
  }
}


export const showCart=(cartItems)=>{
  return dispatch=>{

    if (cartItems.totalItems>0) {
      axios.post('/cart/order',cartItems)
            .then(res=>{
              return dispatch({
                type:"MY_ORDER",
                payload:res.data
              })
            })
    }
  }
}


export const cartItems=(itemData)=>{
  return {
    type:actionType.ADD_ITEM,
    payload:itemData
  }
}
