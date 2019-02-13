import axios from 'axios';




export const addProduct=(productDetails)=>{
  return dispatch=>{
    axios.post('/admin/addProduct',productDetails)
          .then(res=>{console.log("success")})
  }
}
