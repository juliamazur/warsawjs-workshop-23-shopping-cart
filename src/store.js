import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import products, { fetchProducts } from "./ducks/products";
import productsData from "./data/products.json";
import cart from "./ducks/cart";
import order from "./ducks/order";

const rootReducer = combineReducers({
  products,
  cart,
  order
});

const store = createStore(rootReducer, applyMiddleware(logger));

store.dispatch(fetchProducts(productsData));

export default store;
