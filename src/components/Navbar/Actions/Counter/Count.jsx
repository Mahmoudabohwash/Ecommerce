import { useState } from "react";

function Count({qty , onIncrease, onDecrease}) {

  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <span>{qty}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
export default Count;