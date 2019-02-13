import * as actionType from './../action/actionType';



const initialState={
  loading:true,
  featured:null,
  limited:null
};


const productReducer=(state=initialState,action)=>{
  switch (action.type) {
    case actionType.HOME_PRODUCTS:
      return {
        ...state,
        limited:action.limited,
        featured:action.featured,
        loading: false
      }
      default:
      return state;
  }

}

export default productReducer;
