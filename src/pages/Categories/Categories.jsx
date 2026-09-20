import categories from "../../Data/Category.js";
import Preview from "../Category/Preview";
function Categories() {
  return (
    <main className="Categories-all">
      <div className="headerCategories">
        <h1>All Categories</h1>
        <p>Explore all categories</p>
      </div>

      <Preview categories={categories} />
    </main>
  );
}
export default Categories;
