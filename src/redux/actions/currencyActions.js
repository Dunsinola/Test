import * as actionTypes from "../constants/currencyConstants";
import axios from "axios";

export const convertCurrency = (id) => async (dispatch) => {
    id=parseInt(id)
  try {
    dispatch({ type: actionTypes.GET_CURRENCY_REQUEST });

    let { data } = await axios.get("https://api.terawork.com/resources");
data= data.data.net_conversions
data=data.filter(cur => cur.id===id)
data=data[0].net_rate
  console.log("here")
  console.log(typeof id)
  console.log(data)
  
    dispatch({
      type: actionTypes.GET_CURRENCY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CURRENCY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
