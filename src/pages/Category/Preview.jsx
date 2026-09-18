import CategoryCard from "../../components/CaregoryCard/CategoryCard";

function Preview({ categories }) {
  return (
    <div className="category-grid">
      
      {categories.map((category) => (
        
        <CategoryCard  
        key={category.id}
        category={category}
       
       />
      ))}
    </div>
  );
}
export default Preview;
