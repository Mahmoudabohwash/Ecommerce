import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar/Navbar";
import LayoutHome from "./pages/Home/layoutHome";
import Categories from "./pages/Categories/Categories";
import Proshop from "./pages/Products/shop";
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";
import ProductDetails from "./pages/Products/ProductDetails";
import { useState } from "react";
import Cartpage from "./components/Navbar/Actions/cart/cart";


function App() {
  console.log("App Render");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header cart={cart} search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={<LayoutHome setCart={setCart} search={search} />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/category/:id"
          element={<CategoryProducts setCart={setCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails setCart={setCart} setSearch={setSearch} />}
        />
        <Route
          path="/shop"
          element={<Proshop setCart={setCart} search={search} />}
        />












        
        <Route
          path="/Cart"
          element={<Cartpage cart={cart} setCart={setCart} />}
        />
      </Routes>
    </Router>
  );
}
export default App;
