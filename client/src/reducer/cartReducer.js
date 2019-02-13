import * as  actionType from './../action/actionType';



const initialState={
  cartItems:[],
  cartItemsWithQuantities:null,
  totalItems:null
}

const cartReducer=(state=initialState,action)=>{
switch (action.type) {
  case actionType.ADD_ITEM:

  let newCart={...state};



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


  newCart.totalItems=newtotalItems;




  return newCart;

  default:
  return state;
}



};




export default cartReducer;
