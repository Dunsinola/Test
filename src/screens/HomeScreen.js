import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// Components
import Product from "../components/Product";
import Footer from "../components/Footer";
//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
console.log(products)
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Hire Top Developers</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          
          products.map((product) => (
            <Product
              key={product._id}
              name={product._source.display_name}
              description={product._source.services_overview_title}
              price={product._source.starting_from}
              imageUrl={product._source.service_photo}
              avatar={product._source.avatar}
              productId={product._id}
            />
      
          ))
        )}
      </div>     
      <Footer></Footer> 
    </div>
  );
};

export default HomeScreen;
