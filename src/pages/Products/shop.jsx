import HeaderPro from "./ProductHeader";
import { filtersearch } from "../../utils/poductFiltering";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from '../../Data/products'
function Proshop({  setCart , search}) {
  const filterpro = filtersearch( products , search);
  console.log("filterpro" , filterpro)
  return (
    <section>
      <HeaderPro />

      <div className="shop">
        {filterpro?.length > 0 ? (
          filterpro.map((product) => (
            <ProductCard key={product.id} 
            product={product} setCart={setCart} />
          ))
        ) : (
          <p>No Data : "{search}"</p>
        )}
      </div>
    </section>
  );
}
export default Proshop;
