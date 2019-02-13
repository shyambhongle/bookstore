import axios from 'axios';

const initialState={
  orders:null
}


const myorder=(state=initialState,action)=>{

switch (action.type) {
  case "MY_ORDER":
  console.log(action.payload);
  return {
    ...state,
    orders:action.payload
  }
  default:
  return state;
}



}


export default myorder;
