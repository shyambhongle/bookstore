import axios from 'axios';

export const orderAction=()=>{
  return dispatch=>{
    axios.get('/myorders')
          .then(res=>{
            dispatch({type:"YOUR_ORDERS",payload:res.data});
          })
  }
}
