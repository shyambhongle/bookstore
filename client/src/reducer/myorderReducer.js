
const initialState={
  myorders:[]
}

const myorderReducer=(state=initialState,action)=>{
  switch (action.type) {
    case "YOUR_ORDERS":

      return {
        myorders:action.payload
      };
    default:
      return state;
  }
}

export default myorderReducer;
