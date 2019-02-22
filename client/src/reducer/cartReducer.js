import * as  actionType from './../action/actionType';
import axios from 'axios';


const initialState={
  cartItems:[],
  cartItemsWithQuantities:null,
  totalItems:null
}


const cartReducer=(state=initialState,action)=>{
switch (action.type) {
  case actionType.ADD_ITEM:

  let newCart={...state};



console.log(action.payload);


  newCart.cartItems.push(action.payload);

   const cartItemsWithQuantities =(newCart) => {
    return newCart.cartItems.reduce((acc, item) => {
      const filteredItem = acc.filter(i2 => i2.id === item.id)[0]
      filteredItem !== undefined
        ? filteredItem.quantity ++
        : acc.push({ ...item, quantity: 1 })
      return acc
    }, [])
  }
  newCart.cartItemsWithQuantities=cartItemsWithQuantities(newCart)

  let newtotalItems=newCart.cartItemsWithQuantities.reduce((acc,item)=>{
    let total=acc + item.quantity;
    return total;
  },0)


  if (action.payload.isauth) {
    axios.post('/profile/addtocart',{payload:newCart.cartItems})
        .then(res=>{console.log(res)});
  };

  newCart.totalItems=newtotalItems;
  localStorage.setItem('localcart', JSON.stringify(newCart.cartItems));
  return newCart;

  case "REMOVE":
  return action.payload;

case "EMPTY_CART":

let updatedCart={
  cartItems:[],
  cartItemsWithQuantities:null,
  totalItems:null
}
return updatedCart;
  default:
  return state;
}



};




export default cartReducer;
