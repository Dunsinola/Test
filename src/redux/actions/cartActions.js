import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  let { data } = await axios.get("https://api.terawork.com/service-categories/sellers-services/computer-software-development");
  data=(data.data.service_search_results.hits)
      
 data= (data.filter (data =>data._id == "330000932-6343"))

   console.log(data)
  
  //  key={product._id}
  //  name={product._source.url_name}
  //  description={product._source.service_description}
  //  price={product._source.starting_from}
  //  imageUrl={product._source.service_photo}
  //  avatar={product._source.avatar}
  //  productId={product._id}

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data._source.url_name,
      imageUrl: data._source.service_photo,
      price: data._source.starting_from,
      countInStock: 1,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
