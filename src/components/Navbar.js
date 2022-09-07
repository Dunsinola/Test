import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch, FaRegHeart } from "react-icons/fa";
const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Dev<span className="hire">Hire</span></h2>
      </div>

      
      <ul className="navbar__links">
        <li>
          <Link to="/" >
           
            <span>
           <FaSearch/> Home <span></span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/cart" >
           
            <span>
              <FaRegHeart/> Favorites
            </span>
          </Link>
        </li>
      
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
