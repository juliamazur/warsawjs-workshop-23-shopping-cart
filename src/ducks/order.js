import { combineReducers } from "redux";
const ORDER_CREATE = "order/create";
const ORDER_SUBMIT = "order/submit";
const ORDER_CHANGE_DELIVERY_ADDRESS = "order/change_delivery_address";
const ORDER_CHANGE_DELIVERY_METHOD = "order/change_delivery_method";

const orderNumber = (state = null, action) => {
  switch (action.type) {
    case ORDER_CREATE:
      return action.payload.orderNumber;
    case ORDER_SUBMIT:
      return null;
    default:
      return state;
  }
};

const products = (state = [], action) => {
  switch (action.type) {
    case ORDER_CREATE:
      return action.payload.products;
    case ORDER_SUBMIT:
      return [];
    default:
      return state;
  }
};

const deliveryAddress = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CHANGE_DELIVERY_ADDRESS:
      return action.payload;
    case ORDER_SUBMIT:
      return {};
    default:
      return state;
  }
};

const deliveryMethod = (state = null, action) => {
  switch (action.type) {
    case ORDER_CHANGE_DELIVERY_METHOD:
      return action.payload.deliveryMethod;
    case ORDER_SUBMIT:
      return null;
    default:
      return state;
  }
};

const orderReducer = combineReducers({
  orderNumber,
  products,
  deliveryAddress,
  deliveryMethod
});

export default orderReducer;

export const createOrder = (orderNumber, products = []) => ({
  type: ORDER_CREATE,
  payload: { orderNumber, products }
});

export const changeDeliveryAddress = payload => ({
  type: ORDER_CHANGE_DELIVERY_ADDRESS,
  payload
});

export const changeDeliveryMethod = deliveryMethod => ({
  type: ORDER_CHANGE_DELIVERY_METHOD,
  payload: { deliveryMethod }
});

export const submitOrder = () => ({ type: ORDER_SUBMIT });

export const getOrder = state => state.order;
export const getDeliveryAddress = state => state.order.deliveryAddress;
