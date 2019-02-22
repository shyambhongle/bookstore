

const inititialState={
  title:'',
  products:[],
  items:[]
}

const searchProduct=(state=inititialState,action)=>{
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        products:[...action.payload],
        title:action.title
      };
      case "INPUT_SEARCH":

      return {
        ...state,
       items:action.payload
      };
    default:
    return state;

  }
}


export default searchProduct;
