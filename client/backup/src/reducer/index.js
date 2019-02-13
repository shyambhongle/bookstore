import {combineReducers} from 'redux';
import productReducer from './productReducer';
import cartItems from './cartReducer';
import authReducer from './authReducer';
import myorder from './orderReducer';

export default  combineReducers({
  product:productReducer,
  cart:cartItems,
  auth:authReducer,
  order:myorder
});
