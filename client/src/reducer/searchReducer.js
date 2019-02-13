

const inititialState={
  title:'',
  products:[]
}

const searchProduct=(state=inititialState,action)=>{
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        products:[...action.payload],
        title:action.title
      };
    default:
    return state;

  }
}


export default searchProduct;
