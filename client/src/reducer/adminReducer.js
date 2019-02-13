

const initialState={
  admin:false
}

const adminAuth=(state=initialState,action)=>{
  switch (action.type) {
    case "ADMIN":

    return {
      admin:action.payload
    };
    default:
    return state;
  }
}



export default adminAuth;
