import axios from 'axios';


export const categoryAction=(e,history)=>{
  return dispatch=>{
    let keyword=e.target.textContent.toLowerCase();
    axios.post('/products',{keyword})
          .then(res=>{dispatch({
            type:"SEARCH",
            payload:res.data,
            title:keyword
          })
          history.push('/search')
      })
  };
}


export const headerNav=(e,history)=>{
  return dispatch=>{
    let keyword=e.target.textContent.toLowerCase();
    axios.post('/products/navigation',{keyword})
          .then(res=>{dispatch({
            type:"SEARCH",
            payload:res.data,
            title:keyword
          })
          history.push('/navigation')
      })
  };
}
