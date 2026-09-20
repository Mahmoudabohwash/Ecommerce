import "../../pages/Cart/Cart.css";
import Count from "../Navbar/Actions/Counter/Count";
import { removeDelete } from "../../utils/poductFiltering";
function CartTable({ cart, setCart }) {
  const MAX_QTY = 20;
  const MIX_QTY = 1;

  const handelDelete = (id) => {
    const newCart = removeDelete(cart, id);
    setCart(newCart);
  }; 
  function UpdateQty(productId, action) {
    const result = cart.map((product) => {
      if (product.id === productId) {
        if (action === "onIncrease") {
          return { ...product, qty: Math.min(MAX_QTY, product.qty + 1) };
        } else if (action === "onDecrease") {
          return {
            ...product,
            qty: Math.max(MIX_QTY, product.qty - 1),
          };
        }
      }
      return product;
    });
    setCart(result);
  }
  console.log("Cart" , cart)

  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>product</th>
          <th>ID</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.id}</td>
            <td>${product.price}</td>
            <td>{product.qty}</td>
            <td>${product.price * product.qty}</td>
            <td>
              <Count
                qty={product.qty}
                onIncrease={() => UpdateQty(product.id, "onIncrease")}
                onDecrease={() => UpdateQty(product.id, "onDecrease")}
              />
              <button onClick={() => handelDelete(product.id)}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default CartTable;
