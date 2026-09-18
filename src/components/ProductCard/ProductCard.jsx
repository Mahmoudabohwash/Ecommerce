import { Link } from "react-router-dom";

function ProductCard({ product, setCart }) {
  function handleAddtoCart() {
    setCart((procart) => {
      const exist = procart.find((item) => item.id === product.id);
      if (exist) {
        return procart;
      } else {
        return [...procart, { ...product, qty: 1 }];
      }
    });
  }

  return (
    <div className="ProductCard">
      <Link to={`/product/${product.id}`}>
        <img className="product-image" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>⭐{product.rating}</p>
      </Link>

      <div>
        <button onClick={handleAddtoCart} className="Addtocart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
