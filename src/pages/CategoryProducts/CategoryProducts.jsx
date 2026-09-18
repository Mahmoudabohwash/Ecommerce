import { useParams } from "react-router-dom";
import products from "../../Data/products";
import Preview from "../../pages/Products/productpreview";
import { filteringByCateogory } from "../../utils/poductFiltering";
function CategoryProducts({setCart}) {
  const { id } = useParams();
  const filterProducts = filteringByCateogory(products, id);
  return (
    <main>
      <h1>CategoryProducts</h1>
      <Preview products={filterProducts} setCart={setCart} />
    </main>
  );
}
export default CategoryProducts;
