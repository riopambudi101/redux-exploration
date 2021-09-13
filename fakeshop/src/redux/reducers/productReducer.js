import { actionTypes } from '../contants/actionTypes';

const initialState = {
  products: [],
};

// export const productReducer = (state, action) => {} ini cara default, tapi di bawah kita destructur actionnya
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
