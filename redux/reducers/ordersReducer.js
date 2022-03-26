import actionTypes from "../actionTypes";

const INITIAL_STATE = [];

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS:
      return [...state, action.orders];
    default:
      return state;
  }
};

export default ordersReducer;
