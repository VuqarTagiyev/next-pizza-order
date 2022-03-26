// actiontypes

import actionTypes from "../../actionTypes";

const setOrders = (orders) => (dispatch) => {
  dispatch({ type: actionTypes.orders.SET_ORDERS, action: { orders } });
};

const orders = {
  setOrders,
};

export default orders;
