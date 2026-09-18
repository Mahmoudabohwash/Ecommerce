import HeaderPro from "./ProductHeader";
import products from "../../Data/products";
import Preview from "./productpreview";
import "./product.css";

function Products({ setCart , search}) {
  return (
    <section className="Products">
      <HeaderPro />

      <Preview products={products.slice(0, 4)}
       setCart={setCart}
        search={search}
       />
    </section>
  );
}
export default Products;
