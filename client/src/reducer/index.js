import {combineReducers} from 'redux';
import productReducer from './productReducer';
import cartItems from './cartReducer';
import authReducer from './authReducer';
import myorder from './orderReducer';
import adminAuth from './adminReducer';
import searchProduct from './searchReducer';


export default  combineReducers({
  product:productReducer,
  cart:cartItems,
  auth:authReducer,
  order:myorder,
  admin:adminAuth,
  search:searchProduct
});
