import CartTable from "../../../Cart/CartTable";
import '../../../../pages/Cart/Cart.css'
function Cartpage({ cart  , setCart}) {
  return (
    <div>
      <div className="cartheader">
        <h1>Product basket</h1>
        <p className="cartlength">
          Number→{cart.length}</p>
      </div>
      {cart.length === 0 ? ( 
  <p  className="messagescaer">
     please add to products to cart</p>
) : (

      <CartTable cart={cart} setCart={setCart} />
)}


    </div>
  );
}
export default Cartpage;
