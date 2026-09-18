
function Cart({ cart }) {
  return (
    <div className="cart">
      <div className="cart-icon">
        🛒<span className="cart-count">{cart}</span>
      </div>
    </div>
  );
}
export default Cart;
