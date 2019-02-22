import {combineReducers} from 'redux';
import productReducer from './productReducer';
import cartItems from './cartReducer';
import authReducer from './authReducer';
import order from './orderReducer';
import adminAuth from './adminReducer';
import searchProduct from './searchReducer';
import myorderReducer from './myorderReducer';


export default  combineReducers({
  product:productReducer,
  cart:cartItems,
  auth:authReducer,
  order:order,
  admin:adminAuth,
  search:searchProduct,
  myorder:myorderReducer
});
