import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { MdBorderColor } from "react-icons/md";

function Cart() {
  return (
    <div className="p-1">
      <Link to="/menu">
        <TiArrowBack className="inline-block" /> Back To Menu
      </Link>
      <p className="text-center">Your cart, %NAME%</p>
      <Link to="/order/new">
        <MdBorderColor className="inline-block" /> Order Pizzas
      </Link>
      <button className="p-2 bg-yellow-500 rounded w-40 block">
        {" "}
        Clear cart
      </button>
    </div>
  );
}

export default Cart;
