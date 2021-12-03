import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../action/actionType';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.findIndex(
        (prod) => prod.id === action.newIteminCart.id
      );
      if (index !== -1) {
        state[index].quantity = state[index].quantity + 1;
        return [...state];
      }
      console.log(index, 'fsdiudh');
      return [action.newIteminCart, ...state];

    case REMOVE_FROM_CART:
      const array = state.filter((prod) => prod.id !== action.id);
      alert('Product Removed Successfully');
      return array;

    case INCREASE_QUANTITY:
      const ind = state.findIndex((prod) => prod.id === action.id);
      state[ind].quantity = state[ind].quantity + 1;
      return [...state];

    case DECREASE_QUANTITY:
      const indice = state.findIndex((prod) => prod.id === action.id);
      if (state[indice].quantity < 2) {
        const array = state.filter((prod) => prod.id !== action.id);
        return array;
      } else {
        state[indice].quantity = state[indice].quantity - 1;
        return [...state];
      }

    default:
      return state;
  }
}
