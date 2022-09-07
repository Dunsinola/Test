import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
 const dispatch = useDispatch();
 
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
 
 
  console.log(product[0]._id)
 
 
  useEffect(() => {
    if (product && match.params.id !== product[0]._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(
      
      product[0]._id,
      product[0]._source.service_photo,
      product[0].name
      
      ));
    
    
    
      history.push(`/cart`);
  };

  


  return (  
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>  
         {console.log(product)
    
        

    }


          <div className="productscreen__left">
            <div className="left__image">
              <img src={[product[0]._source.avatar]} alt={[product[0].name]} />
            </div>
{/*            
            key={product._id}
              name={product[0].name}
              description={product[0]._source.services_overview_title}
              price={product[0]._source.starting_from}
              imageUrl={product[0]._source.service_photo}
              avatar={product[0]._source.avatar}
              productId={product[0]._id} */}

            <div className="left__info">
              <p className="left__name">{[product[0].name]}</p>
              <p>Price: {[product[0]._source.starting_from]}</p>
              <p>Description: {[product[0]._source.services_overview_title]}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>{[product[0]._source.starting_from]}</span>
              </p>
             
           
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Favourite
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
