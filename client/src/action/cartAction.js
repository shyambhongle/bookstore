import * as actionType from './actionType';
import axios from 'axios';

export const addToCart=(payload)=>{
  return dispatch=>{
    console.log(payload);
      return dispatch(cartItems(payload));
  }
}

export const authAddCart=()=>{
  return dispatch=>{
axios.get('/profile/cartitems')
      .then(res=>{
        if (res.data.length>0) {
          res.data.map(item=>{
            return dispatch(cartItems(item))
          })
        }
      })
  }
}

export const removeAuthCart=()=>{
  return dispatch=>{
    axios.post('/profile/removecart')
          .then(res=>{console.log(res);})
  };
}




export const showCart=(cartItems)=>{
  return dispatch=>{
    if (cartItems.totalItems>0) {
      axios.post('/cart/order',cartItems)
            .then(res=>{
              return dispatch({
                type:"MY_ORDER",
                payload:res.data,
              });
            })
    }
  }
}


export const removeItems=(cartItems,id,isauth)=>{
  return dispatch=>{

    let updatedCart={
      cartItems:[],
      cartItemsWithQuantities:[],
      totalItems:0
    }

    cartItems.cartItems.filter(item=>{
      return item.id!==id?updatedCart.cartItems.push(item):null
    })

    cartItems.cartItemsWithQuantities.filter(item=>{
      return item.id!==id?updatedCart.cartItemsWithQuantities.push(item):null;
    })
    updatedCart.totalItems=updatedCart.cartItems.length;

    if (cartItems.totalItems>0) {
      axios.post('/cart/order',updatedCart)
            .then(res=>{
              return dispatch({
                type:"MY_ORDER",
                payload:res.data
              });
            })
    }
    localStorage.setItem('localcart', JSON.stringify(updatedCart.cartItems));
      if (isauth.isAuthenticated) {
        axios.post('/profile/addtocart',{payload:updatedCart.cartItems})
            .then(res=>{console.log(res)});
      };
     dispatch({type:"REMOVE",payload:updatedCart});
  }
}




export const cartItems=(itemData)=>{
  return {
    type:actionType.ADD_ITEM,
    payload:itemData
  }
}
