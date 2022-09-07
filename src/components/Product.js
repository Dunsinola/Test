import "./Product.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaRegHeart } from "react-icons/fa";

// Actions
import { addToCart } from "../redux/actions/cartActions";

const Product = ({ imageUrl, description, price, name, productId }) => {
  
  const dispatch = useDispatch();
 
 
 
  const addToCartHandler = () => {
    dispatch(addToCart(
      
      imageUrl, description, price, name,  productId 


      ));
    
    
    
   
  };

  

  
  
  
  
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">

          <div className="like_group"> 
            <p className="info__name">{name}</p>
            <FaRegHeart className="like" onClick={addToCartHandler}></FaRegHeart>
          </div>
             


        <p className="info__description">{description.substring(0, 200)}...</p>

        <p className="info__price">{price}</p>

        <Link onClick={addToCartHandler} className="info__button">
          Hire
        </Link>
      </div>
    </div>
  );
};

export default Product;
