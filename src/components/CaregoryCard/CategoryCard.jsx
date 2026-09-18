import { Link } from "react-router-dom";

function CategoryCard ({category}) {
    return(
        <Link 
          to = {`/category/${category.id}`}
        className="category-card">            
          <img src={category.image} alt={category.name} />
          <h5>{category.name}</h5>
        </Link>
    )
 }
 export default CategoryCard;