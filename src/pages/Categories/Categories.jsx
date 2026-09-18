 import categories from  "../../Data/Category.js";
 import Preview from "../Category/Preview";
 function Categories(){
    return(
        <main className="Categories-all">
         <h1>All Categories</h1>
         <p>Explore all categories</p>
         <Preview categories={categories} />
        </main>
    )
  }
  export default Categories;