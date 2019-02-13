import * as actionType from './../action/actionType';



const initialState={
  loading:true,
  products:null
};


const productReducer=(state=initialState,action)=>{
  switch (action.type) {
    case actionType.HOME_PRODUCTS:
      return {
        ...state,
        products:action.payload,
        loading: false
      }
      default:
      return state;
  }

}

export default productReducer;
