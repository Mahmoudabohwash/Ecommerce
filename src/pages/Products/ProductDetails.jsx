import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../Data/products";

function ProductDetails({ setCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);
  if (!product) return <p>the product is not available. </p>;
  return (
    <div className="product-details">
      <ProductCard  product={product} setCart={setCart} />
        <p>{product.description}</p>
      <div>
      </div>
    </div>
  );
}
export default ProductDetails;
