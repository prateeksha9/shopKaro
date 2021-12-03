import { combineReducers } from 'redux';
import posts from './posts';
import cart from './cart';
export default combineReducers({
  posts,
  cart,
});
