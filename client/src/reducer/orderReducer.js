
const initialState={
  orders:null,
  totalAmount:null
}


const order=(state=initialState,action)=>{

switch (action.type) {
  case "MY_ORDER":


  return {
    ...state,
    orders:action.payload.allOrders,
    totalAmount:action.payload.totalAmount
  }
  default:
  return state;
}



}


export default order;
