import { find } from 'lodash'
const PRODUCTS_LOAD = "products/load";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_LOAD:
      return [...state, ...action.payload.items];
    default:
      return state;
  }
};

export const fetchProducts = items => ({
  type: PRODUCTS_LOAD,
  payload: { items }
});

export default productsReducer;

export const getProducts = state => state.products;
export const getProduct = (state, id) => find(state.products, {id});