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


export const inputSearch=(e)=>{
  return dispatch=>{
      if (e.target.value.length>1) {
        let keyword=e.target.value;
        axios.post('/products/input',{keyword})
              .then(res=>{
                if (res.data.length===0) {
                  dispatch({type:"INPUT_SEARCH",payload:[],title:"no item found"})
                }else {
                  dispatch({type:"INPUT_SEARCH",payload:res.data});

                }
              });
      }
        else{
          dispatch({type:"INPUT_SEARCH",payload:[]})
      }
  }
}


export const inputClick=(id,title,history)=>{
  return dispatch=>{
    axios.post('/products/inputclick',{id})
        .then(res=>{
          dispatch({
            type:"SEARCH",
            payload:res.data,
            title:title
          })
          dispatch({type:"INPUT_SEARCH",payload:[]})
          history.push('/search')
        });
  }
}



export const inputSearchClick=(id,history)=>{
  return dispatch=>{
    if (id.items.length>1) {
      axios.post('/products/inputsearchclick',id)
            .then(res=>{
              dispatch({
                type:"SEARCH",
                payload:res.data,
                title:"Related Books"
              })
            dispatch({type:"INPUT_SEARCH",payload:[]})
            history.push('/search')
            })
    }
  }
}
