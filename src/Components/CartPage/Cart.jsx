import { useContext } from "react";
import { CartContext } from "../MainApp/App";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          Ordered {item.title} of quantity {item.count}
        </li>
      ))}
    </ul>
  );
};

export default Cart;
