import * as actionTypes from "../constants/currencyConstants";

export const convertCurrencyReducer = (state = { currency: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENCY_REQUEST:
      return {
        loading: true,
        currency: [],
      };
    case actionTypes.GET_CURRENCY_SUCCESS:
      return {
        currency: action.payload,
        loading: false,
      };
    case actionTypes.GET_CURRENCY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};