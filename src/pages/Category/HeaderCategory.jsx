 import { Link } from "react-router-dom";
 import './Category.css'
  function HeaderCategory(){
    return(
        <header className="HeaderCategory">
        <h3> Shop by Category</h3>
       <Link to="/categories" >
       View All
       </Link>
        </header>
    )
   }
   export default HeaderCategory;
   