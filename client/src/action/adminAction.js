import axios from 'axios';




export const addProduct=(productDetails)=>{
  return dispatch=>{
    axios.post('/admin/addproduct',productDetails)
          .then(res=>{console.log("success")})
  }
}


export const updateProduct=(productDetails)=>{
  return dispatch=>{
    console.log(productDetails);
    axios.post('/admin/updateproduct',productDetails)
    .then(res=>{console.log(res.data)})
  }
}
