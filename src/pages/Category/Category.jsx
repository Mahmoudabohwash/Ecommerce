import HeaderCategory from "./HeaderCategory";
import Preview from "./Preview";
import categories from "../../Data/Category.js";

function Category() {
  return (
    <section className="category">
      <HeaderCategory />
      <Preview categories={categories.slice(0, 5)} />
    </section>
  );
}
export default Category;
