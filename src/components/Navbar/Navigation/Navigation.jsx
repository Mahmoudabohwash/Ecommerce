import { Link } from "react-router-dom";
function Navigation(){
    return(
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to ="/Categories">Categories</Link>
          <a >offers</a>
        </nav>
    );
  }
  export default Navigation;