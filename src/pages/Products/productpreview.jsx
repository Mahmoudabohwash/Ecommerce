import ProductCard from "../../components/ProductCard/ProductCard";
import { filtersearch } from "../../utils/poductFiltering";

function Preview({ products, setCart, search }) {
  const filterpro = filtersearch(products, search);
  return (
    <div className="productpreview">
      {filterpro.length > 0 ? (
        filterpro.map((product) => (
          <ProductCard key={product.id} 
          product={product} setCart={setCart}  />
        ))
      ) : (
        <p className="soon">it will appear soon 🚧</p>
      )}
    </div>
  );
}
export default Preview;
