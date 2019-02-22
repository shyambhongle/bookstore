import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from './actionType';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>console.log(err));
};

// Login - Get User Token
export const loginUser = (userData,history,testValidate) => dispatch => {
  axios
    .post('/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user



      if (decoded.admin) {
        dispatch({type:"ADMIN",payload:true})
        dispatch(setCurrentUser(decoded));
      }else{

        dispatch(setCurrentUser(decoded));
        if (testValidate) {
          history.push('/cart')
        }else {
          axios.get('/profile/cartitems')
                .then(res=>{
                  if (res.data.length>0) {
                    res.data.map(item=>{
                      console.log(item);
                    return  dispatch({type:"ADD_ITEM",payload:item});
                    })
                  }
                })
                history.push('/')
        }
      }
      axios.post('/profile').then(res=>{console.log("success");});
    })
    .catch(err =>{console.log(err.response);});
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = (data) => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('localcart');
  dispatch({type:"EMPTY_CART"});
  // Remove auth header for future requests
  setAuthToken(false);
  if (data) {
    dispatch({type:"ADMIN",payload:false})
  }
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
